---
type: event
title: Lightning Talks
themen: ["Neo4OC - Neo4j Graphdatenbank mit Objective-C", "Debugging von mobilen Webseiten (und Webviews)", "Mobile Natural User Interface - vom Wischen, Tappen und Sprechen"]
all_events_title: Lightning Talks
all_events_text: Do. 14. Juni 2012 im cowoco
---

Nachdem wir den Kick-Off bei einem Stammtisch gefeiert haben,
wollen wir euch nun zum ersten Talk-Abend einladen.
Am 14. Juni ist es soweit. Wir laden euch herzlich in den cowoco
(Coworking-Space Gasmotorenfabrik) zum Lightning-Talk Abend ein.

### Agenda

<table>
  <tr>
    <td>19:00 Uhr</td>
    <td>Opening (Warmlaufen / Kennenlernen / Networking)</td>
  </tr>
  <tr>
    <td>19:25 Uhr</td>
    <td>Verlosung</td>
  </tr>
  <tr>
    <td>19:30 Uhr</td>
    <td>Vorträge / Lightning Talks</td>
  </tr>
  <tr>
    <td>danach</td>
    <td>
      Diskutieren, austauschen, Bier trinken, etc.
    </td>
  </tr>
</table>

### Themen

<ul style="margin: 0px;">
  <li>
    Neo4OC - Neo4j Graphdatenbank mit Objective-C<br/>
    Maxim Zaks
  </li>
  <li>
    Debugging von mobilen Webseiten (und Webviews)<br/>
    Jörg Vanderhoeven
  </li>
  <li>
    Mobile Natural User Interface - vom Wischen, Tappen und Sprechen<br/>
    Dominique Winter
  </li>
</ul>

### Anmeldung

Für eine grobe Planung würden wir uns freuen, wenn ihr euch auf einer der folgenden
praktischen* Plattformen anmelden würdet:

<ul style="margin: 0px;">
  <li><a href="https://www.doodle.com/55f7xz39yhphzmwb">Doodle</a> &nbsp; (verstecke Anmeldung, Namen werden nicht veröffentlicht)</li>
  <li><a href="https://hcking.de/events/105-mobile-cologne/dates/598">hcking</a> &nbsp; (Eventkalender für Hacker in Köln und Umgebung)</li>
  <li><a href="https://www.xing.com/events/mobile-cologne-lightning-talks-1096351">Xing</a></li>
</ul>

(*netterweise könnt ihr alle diese Plattformen auch in euren Terminkalender einbinden...)

<Location_gasmotorenfabrik/>

## Rückblick

Nochmals vielen Dank an unsere Vortragendenen,
den <a href="https://cowoco.heroku.com/spaces/3" target="_blank">Coworking-Space in der Gasmotorenfabrik</a>,
sowie unsere Sponsoren.<br/><br/>
Für die weitere Recherche, und alle Interessierte die nicht da sein konnten,
hier alle Projektlinks, einige Stichpunkte, etc.

### Maxim Zaks über Neo4OC - Neo4j Graphdatenbank mit Objective-C

<ul>
  <li>Eine gute Einführung in Graphendatenbank auf
    <a href="https://www.youtube.com/watch?v=nJmGrNdJ5Gw" target="_blank">Youtube</a></li>
  <li><a href="https://neo4j.org/" target="_blank">Neo4J</a>
    ist eine Graphendatenbank, die ihre Vorteil dann ausspielen kann,
    wenn auch die Daten in Graphen gespeichert werden, also die interessanten
    Informationen in den Datenrelationen liegen</li>
  <li>NEO4J hat eigene sehr mächtige Query Language für Knoten und Kante</li>
  <li>Daten (beliebiger Tiefe) werden als Knoten oder als Kante gespeichert</li>
  <li>Implementiert in Java und daher in JEE und Android Apps direkt als Library nutzbar</li>
  <li>In-Memory alternative zu ORM mit SQLite</li>
  <li>Gibt es als einfachen Rest-Webserver</li>
  <li>Eigene <a href="https://github.com/mzaks/NEO4OC" target="_blank">Neo4OC</a>
    (github) Implementierung für Objective C verwendet diese REST-Schnittstelle
    (<a href="https://github.com/mzaks/NEO4OC-Specs" target="_blank">Spec/Test-Projekt</a>, github)</li>
  <li>Relationen werden als Kanten gespeichert</li>
</ul>

### Jörg Vanderhoeven über Debugging von mobilen Webseiten (und Webviews)

Jörg hat uns netterweise direkt einige richtig coole Developer Tools vorgestellt:

<b>Apache Weinre</b>
<ul>
  <li>Bestandteil des Apache Cordova (ehemals Phonegap) Projektes</li>
  <li>JavaScript Remote Debugger, Webinspektor, Local Storage, AJAX Requests sehen</li>
  <li>Aktuell im incubator Status und daher verteilt auf einige Seiten:
    <a href="https://github.com/apache/incubator-cordova-weinre" target="_blank">github</a>
    <a href="https://people.apache.org/~pmuellr/weinre/" target="_blank">Download und Doc</a>
  </li>
  <li>Bedingung im selben Netz, dafür Kabel ungebunden</li>
  <li>Öffentliche Demo-Instanz auf
    <a href="https://debug.phonegap.com/" target="_blank">debug.phonegap.com</a>
  </li>
</ul>
  
<b>Adobe Shadow</b>
<ul>
  <li>
    <a href="https://labs.adobe.com/technologies/shadow/" target="_blank">Homepage</a>
    <a href="https://labs.adobe.com/downloads/shadow.html" target="_blank">Download</a>
  </li>
  <li>Komfortableres Weinre</li>
  <li>Im Chrome angesürfte Seiten werden direkt an alle gebundenen Geräte übertragen</li>
  <li>Benötigt dafür aber Chrome Extension sowie Container nur iOS und Android</li>
  <li>Wird vermutlich irgendwann kommerziell</li>
</ul>
  
<b>iWebInspector</b>
<ul>
  <li>
    Homepage:
    <a href="https://www.iwebinspector.com/" target="_blank">www.iwebinspector.com</a>
  </li>
  <li>Natives WebDebugging für den Safari im iPhone und Co. Simulator</li>
  <li>XCode 4.5 und iOS 6 bieten Remote Debugging direkt in der IDE</li>
</ul>

<b>HTTP Mitschneiden</b>
<ul>
  <li>Alternative, insbesondere wenn der Content "kompliziert" (z.B. Geräteabhängig) generiert wird</li>
  <li>Hier stehen direkt einige Tools für unterschiedliche Plattformen zur Verfügung, z.B.</li>
  <li><a href="https://www.wireshark.org/" target="_blank">wireshark</a></li>
  <li><a href="https://www.soapui.org/" target="_blank">soapUI</a></li>
  <li><a href="https://www.parosproxy.org/" target="_blank">Paros</a></li>
  <li><a href="https://www.charlesproxy.com/" target="_blank">Charles</a></li>
  <li><a href="https://filterproxy.sourceforge.net/" target="_blank">FilterProxy</a></li>
</ul>

### Dominique Winter über Mobile Natural User Interface - vom Wischen, Tappen und Sprechen

Ein großartiger Talk vom langen Weg von CLI über GUIs zu NUIs.

<iframe src="https://www.slideshare.net/slideshow/embed_code/13524785" width="510" height="426" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border: 1px solid #CCC; border-width: 1px 1px 0;" allowfullscreen></iframe>

View more presentations from <a href="https://www.slideshare.net/designik" target="_blank">designik</a>

### Sponsored by

<a href="https://www.oreilly.de/" target="_blank">
  <img src="/static/images/oreilly.png" style="width: 150px; padding: 20px;" />
</a>
<a href="https://www.galileocomputing.de/" target="_blank">
  <img src="/static/images/galileocomputing.gif" style="width: 150px; padding: 20px;" />
</a>
