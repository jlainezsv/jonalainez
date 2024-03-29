﻿<!-----------------------------------------------------------------------
********************************************************************************
Copyright Since 2005 ColdBox Framework by Luis Majano and Ortus Solutions, Corp
www.coldbox.org | www.luismajano.com | www.ortussolutions.com
********************************************************************************
Author 	 :	Luis Majano
Date     :	September 23, 2005
Description :
This is a DATE utilities library.
Modification History:
----------------------------------------------------------------------->
<cfcomponent
	hint  ="This CFC is a utility that helps you deal with date representations for specific date-time formats"
	output="false"
>
	<!------------------------------------------- DATE PARSING METHODS ------------------------------------------->

	<cffunction
		name      ="parseISO8601"
		access    ="public"
		output    ="false"
		returntype="string"
		hint      ="Parse a UTC or iso8601 date to a normal CF datetime object: <a href='http://en.wikipedia.org/wiki/ISO_8601'>http://en.wikipedia.org/wiki/ISO_8601</a>, usually follows the YYYY-MM-DDThh:mm:ss format"
	>
		<!--- ******************************************************************************** --->
		<cfargument name="datetime" type="string" required="true" hint="The datetime string to convert"/>
		<!--- ******************************************************************************** --->
		<cfset var returnDate = arguments.datetime>
		<cfset var datebits = structNew()>
		<cfset var roundedSeconds = "00">
		<cfset var wddxPacket = "">

		<!--- Date Bits Initialization --->
		<cfset datebits.main = returnDate>
		<cfset datebits.offset = "">

		<!--- Parse if its an ISO Date --->
		<cfif reFind( "[[:digit:]]T[[:digit:]]", datebits.main )>
			<cfscript>
			/* Test for Z */
			if ( datebits.main contains "Z" ) {
				/* Set Offset to 0 and replace the Z with nothing. */
				datebits.offset = "+00:00";
				datebits.main   = replace( arguments.datetime, "Z", "", "ONE" );
			}
			/* test for containz + */
			else if ( datebits.main contains "+" ) {
				/* Split offset and remove it from main datetime */
				datebits.offset = "+" & listLast( datebits.main, "+" );
				datebits.main   = replace( datebits.main, datebits.offset, "", "ONE" );
			} else {
				/* Split negative offset and remove it from main datetime */
				datebits.offset = "-" & listLast( datebits.main, "-" );
				datebits.main   = replace( datebits.main, datebits.offset, "", "ONE" );
			}
			/* If no seconds, add them */
			if ( listLen( datebits.main, ":" ) lt 3 ) {
				datebits.main = datebits.main & ":00";
			}
			/* If it has fractional seconds, round it up. BIG DEAL!! */
			roundedSeconds = numberFormat( round( listLast( datebits.main, ":" ) ), "00" );
			datebits.main  = listSetAt(
				datebits.main,
				listLen( datebits.main, ":" ),
				roundedSeconds,
				":"
			);
			/* Append All */
			datebits.main = datebits.main & datebits.offset;

			/* Wddx hack to get a datetime object */
			wddxPacket = "<wddxPacket version='1.0'><header/><data><dateTime>#datebits.main#</dateTime></data></wddxPacket>";
			</cfscript>
			<!--- WDDX Hack --->
			<cfwddx action="wddx2cfml" input="#wddxPacket#" output="wddxPacket"/>
			<cfset returnDate = dateConvert( "local2utc", wddxPacket )/>
		</cfif>

		<!--- Return the date --->
		<cfreturn returnDate>
	</cffunction>

	<cffunction
		name      ="parseRFC822"
		access    ="public"
		output    ="false"
		returntype="string"
		hint      ="Parse RFC822 dates, returns empty string if not a valid date. More information at <a href='http://www.faqs.org/rfcs/rfc822.html'>http://www.faqs.org/rfcs/rfc822.html</a>. Example: Wed, 02 Oct 2002 08:00:00 EST"
	>
		<!--- ******************************************************************************** --->
		<cfargument name="datetime" type="string" required="true" hint="The datetime string to convert"/>
		<!--- ******************************************************************************** --->
		<cfscript>
		var formatter     = createObject( "java", "java.text.SimpleDateFormat" ).init( "EEE, dd MMM yyyy HH:mm:ss Z" );
		var parsePosition = createObject( "java", "java.text.ParsePosition" ).init( 0 );
		var refLocal      = structNew();

		refLocal.results = arguments.datetime;

		// Parse the date
		if ( len( arguments.datetime ) neq 0 )
			refLocal.results = formatter.parse( arguments.datetime, parsePosition );

		// Null Check
		if ( structKeyExists( refLocal, "results" ) ) {
			return refLocal.results;
		}

		// Return Default.
		return arguments.datetime;
		</cfscript>
	</cffunction>
</cfcomponent>
