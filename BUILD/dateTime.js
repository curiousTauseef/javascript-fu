dateTimeFu adds a new method "format" to the baked in JavaScript date object


format() takes one argument, a formatting mask
you can use some of the built in formatting masks such as ""

// create a new Date (which will return the the current date and time)
var now = new Date();

this will return the value of "Tue May 25 2010 22:59:09 GMT-0400 (EST)"

  
now that we have a DateTime object with the current date and time, we can format it

now.format("m/dd/yy");
// Returns, e.g., 6/09/07

// Can also be used as a standalone function
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// Saturday, June 9th, 2007, 5:46:21 PM

// You can use one of several named masks
now.format("isoDateTime");
// 2007-06-09T17:46:21

// ...Or add your own
dateFormat.masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
now.format("hammerTime");
// 17:46! Can't touch this!

// When using the standalone dateFormat function,
// you can also provide the date as a string
dateFormat("Jun 9 2007", "fullDate");
// Saturday, June 9, 2007

// Note that if you don't include the mask argument,
// dateFormat.masks.default is used
now.format();
// Sat Jun 09 2007 17:46:21

// And if you don't include the date argument,
// the current date and time is used
dateFormat();
// Sat Jun 09 2007 17:46:22

// You can also skip the date argument (as long as your mask doesn't
// contain any numbers), in which case the current date/time is used
dateFormat("longTime");
// 5:46:22 PM EST

// And finally, you can convert local time to UTC time. Either pass in
// true as an additional argument (no argument skipping allowed in this case):
dateFormat(now, "longTime", true);
now.format("longTime", true);
// Both lines return, e.g., 10:46:21 PM UTC

// ...Or add the prefix "UTC:" to your mask.
now.format("UTC:h:MM:ss TT Z");
// 10:46:21 PM UTC


<table cellspacing="0" summary="Date Format mask metasequences">
	<thead>
		<tr>
			<th>Mask</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>d</code></td>
			<td>Day of the month as digits; no leading zero for single-digit days.</td>
		</tr>
		<tr class="altBg">
			<td><code>dd</code></td>
			<td>Day of the month as digits; leading zero for single-digit days.</td>
		</tr>
		<tr>
			<td><code>ddd</code></td>
			<td>Day of the week as a three-letter abbreviation.</td>
		</tr>
		<tr class="altBg">
			<td><code>dddd</code></td>
			<td>Day of the week as its full name.</td>
		</tr>
		<tr>
			<td><code>m</code></td>
			<td>Month as digits; no leading zero for single-digit months.</td>
		</tr>
		<tr class="altBg">
			<td><code>mm</code></td>
			<td>Month as digits; leading zero for single-digit months.</td>
		</tr>
		<tr>
			<td><code>mmm</code></td>
			<td>Month as a three-letter abbreviation.</td>
		</tr>
		<tr class="altBg">
			<td><code>mmmm</code></td>
			<td>Month as its full name.</td>
		</tr>
		<tr>
			<td><code>yy</code></td>
			<td>Year as last two digits; leading zero for years less than 10.</td>
		</tr>
		<tr class="altBg">
			<td><code>yyyy</code></td>
			<td>Year represented by four digits.</td>
		</tr>
		<tr>
			<td><code>h</code></td>
			<td>Hours; no leading zero for single-digit hours (12-hour clock).</td>
		</tr>
		<tr class="altBg">
			<td><code>hh</code></td>
			<td>Hours; leading zero for single-digit hours (12-hour clock).</td>
		</tr>
		<tr>
			<td><code>H</code></td>
			<td>Hours; no leading zero for single-digit hours (24-hour clock).</td>
		</tr>
		<tr class="altBg">
			<td><code>HH</code></td>
			<td>Hours; leading zero for single-digit hours (24-hour clock).</td>
		</tr>
		<tr>
			<td><code>M</code></td>
			<td>Minutes; no leading zero for single-digit minutes.<br>
				<span class="small">Uppercase M unlike CF <code>timeFormat</code>'s m to avoid conflict with months.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>MM</code></td>
			<td>Minutes; leading zero for single-digit minutes.<br>
				<span class="small">Uppercase MM unlike CF <code>timeFormat</code>'s mm to avoid conflict with months.</span></td>
		</tr>
		<tr>
			<td><code>s</code></td>
			<td>Seconds; no leading zero for single-digit seconds.</td>
		</tr>
		<tr class="altBg">
			<td><code>ss</code></td>
			<td>Seconds; leading zero for single-digit seconds.</td>
		</tr>
		<tr>
			<td><code>l</code> <em>or</em> <code>L</code></td>
			<td>Milliseconds. <code>l</code> gives 3 digits. <code>L</code> gives 2 digits.</td>
		</tr>
		<tr class="altBg">
			<td><code>t</code></td>
			<td>Lowercase, single-character time marker string: <em>a</em> or <em>p</em>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr>
			<td><code>tt</code></td>
			<td>Lowercase, two-character time marker string: <em>am</em> or <em>pm</em>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>T</code></td>
			<td>Uppercase, single-character time marker string: <em>A</em> or <em>P</em>.<br>
				<span class="small">Uppercase T unlike CF's t to allow for user-specified casing.</span></td>
		</tr>
		<tr>
			<td><code>TT</code></td>
			<td>Uppercase, two-character time marker string: <em>AM</em> or <em>PM</em>.<br>
				<span class="small">Uppercase TT unlike CF's tt to allow for user-specified casing.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>Z</code></td>
			<td>US timezone abbreviation, e.g. <em>EST</em> or <em>MDT</em>. With non-US timezones or in the Opera browser, the GMT/UTC offset is returned, e.g. <em>GMT-0500</em><br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr>
			<td><code>o</code></td>
			<td>GMT/UTC timezone offset, e.g. <em>-0500</em> or <em>+0230</em>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>S</code></td>
			<td>The date's ordinal suffix (<em>st</em>, <em>nd</em>, <em>rd</em>, or <em>th</em>). Works well with <code>d</code>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr>
			<td><code>'...'</code> <em>or</em> <code>"..."</code></td>
			<td>Literal character sequence. Surrounding quotes are removed.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>UTC:</code></td>
			<td>Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
	</tbody>
</table>


<table cellspacing="0" summary="Date Format named masks">
	<thead>
		<tr>
			<th>Name</th>
			<th>Mask</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>default</td>
			<td>ddd mmm dd yyyy HH:MM:ss</td>
			<td>Sat Jun 09 2007 17:46:21</td>
		</tr>
		<tr class="altBg">
			<td>shortDate</td>
			<td>m/d/yy</td>
			<td>6/9/07</td>
		</tr>
		<tr>
			<td>mediumDate</td>
			<td>mmm d, yyyy</td>
			<td>Jun 9, 2007</td>
		</tr>
		<tr class="altBg">
			<td>longDate</td>
			<td>mmmm d, yyyy</td>
			<td>June 9, 2007</td>
		</tr>
		<tr>
			<td>fullDate</td>
			<td>dddd, mmmm d, yyyy</td>
			<td>Saturday, June 9, 2007</td>
		</tr>
		<tr class="altBg">
			<td>shortTime</td>
			<td>h:MM TT</td>
			<td>5:46 PM</td>
		</tr>
		<tr>
			<td>mediumTime</td>
			<td>h:MM:ss TT</td>
			<td>5:46:21 PM</td>
		</tr>
		<tr class="altBg">
			<td>longTime</td>
			<td>h:MM:ss TT Z</td>
			<td>5:46:21 PM EST</td>
		</tr>
		<tr>
			<td>isoDate</td>
			<td>yyyy-mm-dd</td>
			<td>2007-06-09</td>
		</tr>
		<tr class="altBg">
			<td>isoTime</td>
			<td>HH:MM:ss</td>
			<td>17:46:21</td>
		</tr>
		<tr>
			<td>isoDateTime</td>
			<td>yyyy-mm-dd'T'HH:MM:ss</td>
			<td>2007-06-09T17:46:21</td>
		</tr>
		<tr class="altBg">
			<td>isoUtcDateTime</td>
			<td>UTC:yyyy-mm-dd'T'HH:MM:ss'Z'</td>
			<td>2007-06-09T22:46:21Z</td>
		</tr>
	</tbody>
</table>