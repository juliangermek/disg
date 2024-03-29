import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      questions_seller: [

        { id: "q1", question: "Wenn ich spreche, wirke ich auf andere...", answer1: "selbstbewusst", answer2: "laut", answer3: "verhalten", answer4: "emotionslos" },
        { id: "q2", question: "Wenn Sie selbst Käufer sind und der Verkäufer zu Beginn Ihres Besuches smalltalkt...", answer1: "lassen Sie es kurz zu, brechen aber schnell ab und kommen zur Sache", answer2: "steigen Sie gerne darauf ein", answer3: "lassen Sie es höflichkeitshalber zu, bringen aber wenig eigene Beiträge", answer4: "steigen Sie i.d.R. nicht darauf ein und signalisieren, dass Sie zur Sache kommen möchten" },
        { id: "q3", question: "Wenn Sie anderen Personen zuhören, verhalten Sie sich...", answer1: "eher ungeduldig und unterbrechen andere", answer2: "freundlich, optimistisch; unterbrechen oft, bringen immer wieder eigene Beiträge ein", answer3: "ruhig und sind ein geduldiger Zuhörer", answer4: "als guter Zuhörer und geben diplomatische Antworten" },
        { id: "q4", question: "Wenn Sie Fragen stellen, geht es ...", answer1: "hauptsächlich um das Wesentliche", answer2: "oft um eigene und die Gefühle anderer", answer3: "meistens um „Wie“-Fragen", answer4: "meistens um weitere bzw. tiefergehende Informationen" },
        { id: "q5", question: "Bei längeren Besprechungen diskutieren Sie...", answer1: "ausdauernd und hart", answer2: "lebhaft und emotional", answer3: "ausgleichend und entgegenkommend", answer4: "diszipliniert und sorgfältig" },
        { id: "q6", question: "Mit Personen aus Ihrem eigenen Umfeld sprechen Sie...", answer1: "knapp und entschlossen", answer2: "offen, tempramentvoll und unbeschwert", answer3: "ausgeglichen und rücksichtsvoll", answer4: "diplomatisch und sorgfältig" },
        { id: "q7", question: "Wenn Sie Ihre eigene Gestik und Mimik beobachten, sehen Sie, dass Sie...", answer1: "sich viel bewegen, fordernder Blick", answer2: "viel mit den Händen gestikulieren, animierender Gesichtsausdruck", answer3: "freundlichen Augenkontakt mit anderen bewahren, warmer Gesichtsausdruck", answer4: "in Ihrer Ausdrucksweise eher zurückhaltend sind, Pokerface" },
        { id: "q8", question: "Im Umgang mit anderen...", answer1: "versuchen Sie, die Führung zu übernehmen oder das Sagen zu haben", answer2: "bringen Sie Ihre Gefühle offen zum Ausdruck und finden schnell Kontakt", answer3: "sind Sie sehr freundlich und nett", answer4: "beobachten und hören Sie viel zu, ohne die anderen zu unterbrechen" },
        { id: "q9", question: "Wenn Sie mit Schwierigkeiten konfrontiert sind, reagieren Sie ...", answer1: "unter Umständen schnell aggressiv und suchen Schuldige", answer2: "aktiv und wollen wissen, ob etwas davon auf sie zurückfallen könnte", answer3: "verunsichert und versuchen, wieder eine stabile Situation herzustellen", answer4: "eher ängstlich und versuchen, die Auswirkungen der Probleme zu analysieren" },
        { id: "q10", question: "Wenn Sie zu Menschen/Ereignissen befragt werden, verhält Sie sich ...", answer1: "unruhig, weiter jetzt!", answer2: "begeisternd, steigen darauf ein", answer3: "entspannt, beteiligen sich höflichkeitshalber", answer4: "distanziert, kommen wieder rasch zur Sache" },
        { id: "q11", question: "Wenn auf Sie neue Aufgaben zukommen, dann ...", answer1: "kommen Sie rasch zu Lösungen", answer2: "bevorzugen Sie spontane Lösungen", answer3: "sind Sie sehr kooperativ und bereitwillig", answer4: "sind Sie eher vorsichtig und nachfragend" },
        { id: "q12", question: "Wenn auf Sie eine Entscheidung treffen sollen, sind Sie eher ...", answer1: "schnell, direkt", answer2: "spontan, etwas unüberlegt", answer3: "langsam, nochmal überschlafen", answer4: "zögerlich, nur nichts falsch machen" },
        { id: "q13", question: "Ihre allgemeine Wahrnehmung von sich ist...", answer1: "wirkt unter Druck, verbreitet Hektik, will dominieren", answer2: "wirkt locker, immer ein Scherz auf der Lippe, redet viel", answer3: "wirkt entspannt, zurückhaltend, muss Vieles aus der Nase ziehen", answer4: "wirkt sachlich, diszanziert, will wenig persönlichen Kontakt, etwas unterkühlt" },

      ],
      questions_buyer: [

        { id: "q1", question: "Wenn diese Person spricht, wirkt sie...", answer1: "selbstbewusst", answer2: "laut", answer3: "verhalten", answer4: "emotionslos" },
        { id: "q2", question: "Wenn Sie mit dieser Person zu Beginn Ihres Besuches smalltalken...", answer1: "lässt sie es kurz zu, bricht aber schnell ab und kommt zur Sache", answer2: "steigt sich gerne darauf ein und stellt sich dar", answer3: "lässt sie es höflichkeitshalber zu, bringt aber wenig eigene Beiträge", answer4: "steigt sie i.d.R. nicht darauf ein und signalisiert, dass sie zur Sache kommen möchte" },
        { id: "q3", question: "Wenn diese Person zuhört, verhält sie sich...", answer1: "eher ungeduldig und unterbricht andere", answer2: "freundlich, optimistisch; unterbricht oft, bringt immer wieder eigene Beiträge ein", answer3: "ruhig und ist ein geduldiger Zuhörer", answer4: "als guter Zuhörer und gibt diplomatische Antworten" },
        { id: "q4", question: "Wenn diese Person Fragen stellt, geht es ...", answer1: "hauptsächlich um das Wesentliche", answer2: "oft um eigene und die Gefühle anderer", answer3: "meistens um „Wie“-Fragen", answer4: "meistens um weitere bzw. tiefergehende Informationen" },
        { id: "q5", question: "Bei längeren Besprechungen diskutiert diese Person...", answer1: "ausdauernd und hart", answer2: "lebhaft und emotional", answer3: "ausgleichend und entgegenkommend", answer4: "diszipliniert und sorgfältig" },
        { id: "q6", question: "Mit Personen aus ihrem eigenen Umfeld spricht diese Person...", answer1: "knapp und entschlossen", answer2: "offen, tempramentvoll und unbeschwert", answer3: "ausgeglichen und rücksichtsvoll", answer4: "diplomatisch und sorgfältig" },
        { id: "q7", question: "Wenn Sie Gestik und Mimik dieser Person beobachten, sehen Sie, dass sie...", answer1: "sich viel bewegt, fordernder Blick", answer2: "viel mit den Händen gestikuliert, animierender Gesichtsausdruck", answer3: "freundlichen Augenkontakt mit Ihnen bewahrt, warmer Gesichtsausdruck", answer4: "in ihrer Ausdrucksweise eher zurückhaltend ist, Pokerface" },
        { id: "q8", question: "Wenn Sie beaobachten, wie diese Person mit anderen umgeht, merken Sie, dass sie...", answer1: "versucht, die Führung zu übernehmen oder das Sagen zu haben", answer2: "ihre Gefühle offen zum Ausdruck bringt und schnell Kontakt findet", answer3: "sehr freundlich und nett ist", answer4: "viel beobachtet und zuhört, ohne die anderen zu unterbrechen" },
        { id: "q9", question: "Wenn diese Person mit Schwierigkeiten konfrontiert wird, reagiert sie ...", answer1: "unter Umständen schnell aggressiv und sucht Schuldige", answer2: "aktiv und will wissen, ob etwas davon auf sie zurückfallen könnte", answer3: "verunsichert und versucht, wieder eine stabile Situation herzustellen", answer4: "eher ängstlich und versucht, die Auswirkungen der Probleme zu analysieren" },
        { id: "q10", question: "Wenn diese Person zu Menschen/Ereignissen befragt wird, verhält sie sich ...", answer1: "unruhig, weiter jetzt!", answer2: "begeisternd, steigt darauf ein", answer3: "entspannt, beteiligt sich höflichkeitshalber", answer4: "distanziert, kommt wieder rasch zur Sache" },
        { id: "q11", question: "Wenn auf diese Person neue Aufgaben zukommen, dann ...", answer1: "kommt sie rasch zu Lösungen", answer2: "bevorzugt sie spontane Lösungen", answer3: "ist sie sehr kooperativ und bereitwillig", answer4: "ist sie eher vorsichtig und nachfragend" },
        { id: "q12", question: "Wenn auf diese Person eine Entscheidung treffen soll, erleben Sie sie eher ...", answer1: "schnell, direkt", answer2: "spontan, etwas unüberlegt", answer3: "langsam, nochmal überschlafen", answer4: "zögerlich, nur nichts falsch machen" },
        { id: "q13", question: "Meine allgemeine Wahrnehmung dieser Person ist...", answer1: "wirkt unter Druck, verbreitet Hektik, will dominieren", answer2: "wirkt locker, immer ein Scherz auf der Lippe, redet viel", answer3: "wirkt entspannt, zurückhaltend, muss Vieles aus der Nase ziehen", answer4: "wirkt sachlich, diszanziert, will wenig persönlichen Kontakt, etwas unterkühlt" },

      ],

      info: [
        [ // Verkäufer dominant
          [ // Käufer dominant
            "<p>Wesentliches ist gut vorbereitet, Details bereithalten, falls erforderlich. Agenda kurz und knapp vorab vorschlagen und Feedback erbitten.</p><p>Programmierung:</p><p>Kunde hat die gefühlte Kontrolle und will schnell zum Ergebnis kommen, im Hintergrund führen, Reibungsfläche bieten</p><p>Erwartung des Kunden an mich:</p><p>Sparringspartner, schnelle Resultate, Alternativen, sportlichen Wettberwerb",
            "Kurzes Warmup, schnell zur Sache kommen",
            "Bedarfe direkt erfragen, schnell auf den Punkt bringen, Wesentliches zusammenfassen",
            "Chancenstrategie, Optionen aufzeigen</p><p>Präsentation vom Groben (=Überschriften) bei Bedarf ins Feine (=Details), bei Ungeduld des Kunden Tempo beschleunigen, Optionen aufzeigen, Ergebnisse klar herausstellen, kaufen lassen</p><p>Nutzen: </p><p>Effizienz, Ersparnisse, schnelle Gewinne, Chancen, eigener Machtgewinn, Kontrolle haben",
            "Einwände ernst nehmen und schnelle Lösungen anbieten, Der Kunde hat immer Recht und das letzte Wort (nicht ich)",
            "Entscheidet schnell aufgrund von Fakten, Wahlmöglichkeiten lassen, Kunde entscheidet, schnell und direkt zum Abschluss kommen",
            "Versprechen und Zusagen halten, prägnant dokumentieren</p>",
          ],
          [ // Käufer initiativ
            "<p>Normal vorbereitet, auf spontane Richtungswechsel vorbereitet sein, weiß der Kunde schon, was er will? Agenda knapp aber alles drin.</p><p>Programmierung:</p><p>Freundlich sein, lächeln, etwas lockerer werden, erst Kontakt herstellen, Gas raus, mehr Interaktion, um den Kunden zu aktivieren, sein Vertrauen gewinnen</p><p>Erwartung des Kunden an mich:</p><p>Beziehung zu mir finden, mir vertauen können, mit Kauf persönliche Vorteile haben, mehr Harmonie",
            "Aktiv und begeistert auftreten, ausgedehnter Smalltalk, flotter Spruch, Zeit einplanen, Bühne für Selbstdarstellung geben",
            "W-Fragen stellen statt argumentieren, aktiv zuhören, raushören, was er wirklich will (Kunde weiß es nicht immer), keine voreiligen Schlüsse ziehen, nicht drängeln",
            "Chancenstrategie, Lösung moderieren</p><p>Kunde mit in die Lösungsfindung einbeziehen (moderieren), mit lösungsorientierten Fragen weiter aktivieren, Köder auslegen, Gründe liefern, damit er groß rauskommt, locker bleiben, Begeisterung wecken, kaufen helfen</p><p>Nutzen:</p><p>Die geniale Lösung, eigene Kräfte schonen, Wie kann er persönlich erfolgreich und gut dastehen?, hatte er ein `Kauferlebnis`?",
            "Immer freundlich und locker bleiben, Kunde anregen, Einwände zu äußern, in gemeinsame Lösung miteinbeziehen",
            "Entscheidet spontan, emotionalen Point of Sale spüren, Abschluss aktiv herbeiführen, Empfehlung aussprechen",
            "Beziehung vertiefen, Zeit für Kundenpflege, will unterhalten werden</p>",
          ],
          [ // Käufer stetig
            "<p>Eigene Ziele außen vor lassen und auf Kundenbedürfnisse konzentrieren, detailliert vorbereitet, auf jeden Fall ausführliche Agenda vorab schicken.</p><p>Programmierung:</p><p>Keinen Druck machen, viel Geduld und Zeit mitbringen, sich einstellen auf Erklären müssen und Fragen beantworten, unterstützen</p><p>Erwartung des Kunden an mich:</p><p>Bestätigung, Sicherheit, kann sich mit Kauf auf mich verlassen, kein Zeitdruck und Stress",
            "Ruhig und ausgeglichen auftreten, eher defensiv, evt. etwas Smalltalk, das Kunde zeigt, dass ich an ihm persönlich interessiert bin",
            "W-Fragen stellen statt argumentieren, aktiv zuhören, öfter zusammenfassen, lieber nochmal nachfragen, erste Hilfen signalisieren",
            "Vermeidungsstrategie, kleine Schritte</p><p>Erst Vertrauen aufbauen, dann Geschäft, viel Infos, erklären, ohne Druck, langsam vom Bekannten zum Neuen in kleinen Schritten führen, nicht mit der Türe ins Haus fallen, kaufen helfen</p><p>Nutzen:</p><p>Vermeidung von Nachteilen, Nachhaltigkeit, nicht alles verändern müssen, Zuverlässigkeit, Service, bewährt, Referenzen, Kunde weiß, was auf ihn zukommt",
            "Zeit geben zum Nachdenken, aktiv Feedback einholen, genau drauf eingehen, ihm ´aus der Patsche´ helfen",
            "Entscheidet wohlüberlegt, zusammenfassen, Restpunkte sauber abarbeiten, weiteren Weg abstecken, vorsichtige Empfehlung aussprechen, Sicherheiten geben, Zeit zum Entscheiden geben, nicht drängen, persönliche Zusagen",
            "Persönliches Feedback, nicht gleich mit dem Nächsten kommen, persönliche Verfügbarkeit und weitere Unterstützung anbieten</p>",
          ],
          [ // Käufer gewissenhaft
            "<p>Ausführlich informieren,</p><p>evt. Unterlagen vorab schicken, Produktdetails sauber und strukturiert vorbereitet, für mögliche weitere Themen vorbereitet sein, ausführliche Agenda vorab.</p><p>Programmierung:</p><p>Keinen Druck machen, nicht drängen, auf viele Detailfragen vorbereitet sein, Zeit mitbringen, Kunde ist vorbereitet, er ist Fachmann</p><p>Erwartung des Kunden an mich:</p><p>Ich bin ebenbürtiger Experte, Qualität, mit Kauf keinen Fehler machen, Zeit für Info und Entscheidung",
            "Sachlich, formal und leise auftreten, i.d.R. kein Smalltalk, gleich zur Sache kommen, Agenda für heute abstimmen",
            "Ich bin Experte, sachlich bleiben, detaillierte Fragen stellen, Bedarf zusammenfassen, keine voreiligen Schlüsse ziehen",
            "Vermeidungsstrategie, Beweise</p><p>Argumente langsam und logisch präsentieren, alle Details mit einbeziehen, Alternativen/ Optionen sauber herausarbeiten, nicht überfahren, Tempo bestimmt der Kunde selbst, kaufen lassen</p><p>Nutzen:</p><p>Betonen der Richtigkeit, Beweise liefern für Argumente und Ergebnisse, Qualität, Service, Prozesssicherheit, keine plötzlichen und gravierenden Veränderungen",
            "Gelassen bleiben bei den detaillierten Fragen, Zeit geben, seine Bedenken mit ZDF sauber ausräumen",
            "Entscheidet zögerlich, zusammenfassen, Restpunkte noch klären, Unterlagen anbieten, Zeit geben, um nochmal prüfen zu können, nicht drängeln, evt. Zeitpunkt zum Nachfassen vereinbaren, persönliche Ebene etwas stärken",
            "Ergebnisse schriftlich zusammenfassen, zu vereinbartem Termin nachfassen, Vereinbarungen exakt einhalten, eher schriftlich kommunizieren</p>",
          ],
        ],
        // Verkäufer initiativ
        [
          [
            "<p>Wesentliches ist gut vorbereitet, Details bereithalten, falls erforderlich. Agenda kurz und knapp vorab vorschlagen und Feedback erbitten.</p><p>Programmierung:</p><p>Kunde hat die gefühlte Kontrolle und will schnell zum Ergebnis kommen, im Hintergrund führen, ausdrucksstarkes Auftreten, aufgabenorientiert, sparsam mit Emotionen</p><p>Erwartung des Kunden an mich:</p><p>Sparringspartner, schnelle Resultate, Alternativen, nicht rumeiern und meine Zeit stehlen",
            "Kurzes Warmup, nicht über `das Wetter` reden, schnell zur Sache kommen",
            "Bedarfe direkt erfragen, schnell auf den Punkt bringen, beim Thema bleiben, auf Ungeduld des Kunden achten, mitschreiben",
            "Chancenstrategie, Optionen aufzeigen</p><p>Präsentation vom Groben (=Überschriften) bei Bedarf ins Feine (=Details), bei Ungeduld des Kunden Tempo beschleunigen, Optionen aufzeigen, nicht herumeiern, nicht abschweifen, auf die Sache konzentrieren, Ziel ist verkaufen, nicht eine gute Beziehung! kaufen lassen</p><p>Nutzen: </p><p>Effizienz, Ersparnisse, schnelle Gewinne, Chancen, eigener Machtgewinn, Kontrolle haben",
            "Einwände ernst nehmen und schnelle Lösungen anbieten, Der Kunde hat Recht und das letzte Wort, seine rationale Art nicht persönlich nehmen, keine Ausflüchte</p><p>",
            "Entscheidet schnell aufgrund von Fakten, Wahlmöglichkeiten lassen, Kunde entscheidet, schnell und direkt zum Abschluss kommen",
            "Versprechen und Zusagen halten, prägnant dokumentieren, Zwischenfeedback geben</p>",
          ],
          [
            "<p>Normal vorbereitet, auf spontane Richtungswechsel vorbereitet sein, weiß der Kunde schon, was er will? Agenda knapp aber alles drin.</p><p>Programmierung:</p><p>Auf Zeitmanagement achten, nicht alle Schleifen des Kunden mitgehen, helfen, dass der Kunde auf dem Boden bleibt, Ziel setzen, sich selbst etwas zurücknehmen, ich bin für´s Strukturieren zuständig</p><p>Erwartung des Kunden an mich:</p><p>Beziehung zu mir finden, mir vertauen können, mit Kauf persönliche Vorteile haben, ich bin wichtiger als du",
            "Sei du selbst, Smalltalk nicht zu stark ausdehnen, Bühne für Selbstdarstellung geben, nicht übertreiben (Zeitmanagement!)",
            "W-Fragen stellen statt zutexten, aktiv zuhören, raushören, was er wirklich will (Kunde weiß es nicht immer), mitschreiben bzw. visualisieren",
            "Chancenstrategie, Lösung moderieren</p><p>Kunde mit in die Lösungsfindung einbeziehen (moderieren), mit lösungsorientierten Fragen weiter aktivieren, Köder auslegen, Gründe liefern, damit er groß rauskommt, Gespräch strukturieren, eine Art Entertainer sein, Begeisterung wecken, Ziel ist Business machen! kaufen helfen</p><p>Nutzen:</p><p>Die geniale Lösung, eigene Kräfte schonen, Wie kann er persönlich erfolgreich und gut dastehen?, hatte er ein `Kauferlebnis`?",
            "Einwände sportlich nehmen, sie sind eine Chance, immer freundlich und locker bleiben, gemeinsame Lösung herausarbeiten, viel reden",
            "Entscheidet spontan, emotionalen Point of Sale spüren, Abschluss aktiv herbeiführen, Empfehlung aussprechen, Zukunft ausmalen, nächste Schritte visualisieren",
            "Kontakt halten, Zeit für Kundenpflege, will unterhalten werden, alles schriftlich dokumentieren, evt. Chancen für Cross Selling nutzen</p>",
          ],
          [
            "<p>Eigene Ziele außen vor lassen und auf Kundenbedürfnisse konzentrieren, detailliert vorbereitet, auf jeden Fall ausführliche Agenda vorab schicken.</p><p>Programmierung:</p><p>Gas raus, keinen Druck machen, viel Geduld und Zeit mitbringen, sich einstellen auf Erklären und Fragen beantworten, nicht so laut und plakativ, etwas verbindlicher sein</p><p>Erwartung des Kunden an mich:</p><p>Bestätigung, Sicherheit, kann sich mit Kauf auf mich verlassen, kein Zeitdruck, nicht so aufdringlich",
            "Sich etwas zurücknehmen, leiser auftreten, nicht gleich den letzten Blondinenwitz bringen, eher defensiv auftreten, evt. etwas Smalltalk, das Kunde zeigt, dass ich an ihm persönlich interessiert bin",
            "Durchdachte Fragen stellen statt argumentieren, viel aktiv zuhören, öfter zusammenfassen, häufig nachfragen, erste Hilfen signalisieren",
            "Vermeidungsstrategie, kleine Schritte</p><p>Erst Vertrauen aufbauen, dann Geschäft, viel Infos, erklären, ohne Druck, langsam vom Bekannten zum Neuen in kleinen Schritten führen, nicht mit der Türe ins Haus fallen, keine Begeisterung erwarten, kaufen helfen</p><p>Nutzen:</p><p>Vermeidung von Nachteilen, Nachhaltigkeit, nicht alles verändern müssen, Zuverlässigkeit, Service, bewährt, Referenzen, Kunde weiß, was auf ihn zukommt",
            "Zeit geben zum Nachdenken, aktiv Feedback einholen, genau drauf eingehen, ihm ´aus der Patsche´ helfen, nicht ungeduldig werden",
            "Entscheidet wohlüberlegt, gemeinsam zusammenfassen, Restpunkte sauber abarbeiten, Empfehlung aussprechen, Vertrauen stärken, zu einer Entscheidung ermutigen, persönliche Zusagen",
            "Persönliches Feedback, nicht gleich mit dem Nächsten kommen, persönliche Verfügbarkeit und weitere Unterstützung anbieten, Versprechen und Zusagen halten </p>",
          ],
          [
            "<p>Ausführlich informieren,</p><p>evt. Unterlagen vorab schicken, Produktdetails sauber und strukturiert vorbereitet, für mögliche weitere Themen vorbereitet sein, ausführliche Agenda vorab.</p><p>Programmierung:</p><p>Keinen Druck machen, nicht drängen, auf viele Detailfragen vorbereitet sein, Zeit mitbringen, eher formal bleiben, nicht zu flapsig oder locker, sehr auf die Sache konzentrieren, Kunde ist vorbereitet, er ist Fachmann</p><p>Erwartung des Kunden an mich:</p><p>Ich bin ebenbürtiger Experte, Qualität, mit Kauf keinen Fehler machen, nicht zugelabert werden",
            "Sachlich, formal und leise auftreten, keinen Wind machen, i.d.R. kein Smalltalk, gleich zur Sache kommen, Agenda für heute abstimmen",
            "Methodisch vorgehen, sachlich bleiben, detaillierte Fragen stellen, Bedarf zusammenfassen, sauber dokumentieren",
            "Vermeidungsstrategie, Beweise</p><p>Argumente möglichst logisch präsentieren, alle Details mit einbeziehen, Beweise liefern, Alternativen/ Optionen sauber herausarbeiten, nicht zu oberflächlich, auch den Haken an der Sache erwähnen, Tempo bestimmt der Kunde selbst, kaufen lassen</p><p>Nutzen:</p><p>Betonen der Richtigkeit, Beweise liefern für Argumente und Ergebnisse, Qualität, Service, Prozesssicherheit, keine plötzlichen und gravierenden Veränderungen",
            "Fragen = Interesse, nicht ungeduldig werden, seine Bedenken mit ZDF sauber ausräumen, rationale und umfassende Antworten, Zeit geben, nichts unter den Tisch fallen lassen",
            "Entscheidet zögerlich, zusammenfassen, Restpunkte noch klären, Unterlagen anbieten, Zeit geben, um nochmal prüfen zu können, nicht drängeln, evt. Zeitpunkt zum Nachfassen vereinbaren",
            "Ergebnisse schriftlich zusammenfassen, zu vereinbartem Termin nachfassen, Vereinbarungen exakt einhalten, eher schriftlich kommunizieren</p>",
          ],
        ],
        // Verkäufer stetig
        [
          [
            "<p>Wesentliches ist gut vorbereitet, Details bereithalten, falls erforderlich. Agenda kurz und knapp vorab vorschlagen und Feedback erbitten.</p><p>Programmierung: </p><p>Kunde hat die Kontrolle und will schnell zum Ergebnis kommen, sparsam mit Emotionen, auf den Punkt kommen, auf Wesentliches konzentrieren, klar und direkt sprechen, positiv bleiben, nach vorne denken und handeln, wenig Persönliches, eigenes Tempo erhöhen, Gas geben</p><p>Erwartung des Kunden an mich:</p><p>Sparringspartner, schnelle Resultate, Alternativen, mehr Mut und Reibung",
            "Kurzes Warmup, nichts Persönliches anbringen, schnell zur Sache kommen, nicht zu unterwürfig",
            "Bedarfe direkt erfragen, schnell auf den Punkt bringen, auf Ungeduld des Kunden achten, nicht in Details verzetteln, mitschreiben",
            "Chancenstrategie, Optionen aufzeigen</p><p>Präsentation vom Groben (=Überschriften) bei Bedarf ins Feine (=Details), bei Ungeduld des Kunden Tempo beschleunigen, Optionen aufzeigen, Vorteile und Zielerreichung des Kunden betonen, nicht herumeiern, nicht umfallen, kaufen lassen</p><p>Nutzen: </p><p>Effizienz, Ersparnisse, schnelle Gewinne, Chancen, eigener Machtgewinn, Kontrolle haben",
            "Einwände ernst nehmen und schnelle Lösungen anbieten, Der Kunde hat Recht und das letzte Wort, engagiert bleiben, nicht umfallen, keine Angst er beißt nicht",
            "Entscheidet schnell aufgrund von Fakten, Wahlmöglichkeiten lassen, Kunde entscheidet, schnell und direkt zum Abschluss kommen, Abschluss nicht mit zusätzlichen Aspekten oder Prüfschleifen verzögern",
            "Versprechen und Zusagen halten, prägnant dokumentieren, Zwischenfeedback geben</p>",
          ],
          [
            "<p>Normal vorbereitet, auf spontane Richtungswechsel vorbereitet sein, weiß der Kunde schon, was er will? Agenda knapp aber alles drin.</p><p>Programmierung: </p><p>Mehr Entusiasmus zeigen als sonst, nicht alle Schleifen des Kunden mitgehen, vom Optimismus des Kunden anstecken lassen, positiv thinking, mit Details verschonen, ich bin für´s Strukturieren zuständig</p><p>Erwartung des Kunden an mich:</p><p>Beziehung zu mir finden, mir vertauen können, mit Kauf persönliche Vorteile haben, mehr Action",
            "Etwas Smalltalk einplanen, lebhafter sein als sonst, Bühne für Selbstdarstellung geben",
            "W-Fragen stellen, kommen lassen, aktiv zuhören, raushören, was er wirklich will (Kunde weiß es nicht immer), mehr Zeit dafür vorsehen, mitschreiben bzw. visualisieren",
            "Chancenstrategie, Lösung moderieren</p><p>Kunde mit in die Lösungsfindung einbeziehen (moderieren), mit lösungsorientierten Fragen weiter aktivieren, Köder auslegen, Gründe liefern, damit er groß rauskommt, Gespräch strukturieren, unterhaltend sein, Begeisterung wecken, kaufen helfen</p><p>Nutzen:</p><p>Die geniale Lösung, eigene Kräfte schonen, Wie kann er persönlich erfolgreich und gut dastehen?, hatte er ein `Kauferlebnis`?",
            "Einwände leicht nehmen, nicht entmutigen lassen, immer freundlich und locker bleiben, gemeinsame Lösung herausarbeiten",
            "Entscheidet spontan, emotionalen Point of Sale spüren, Abschluss aktiv herbeiführen, Empfehlung aussprechen, Zukunft ausmalen, nächste Schritte visualisieren",
            "Beziehung vertiefen, Zeit für Kundenpflege, will unterhalten werden</p>",
          ],
          [
            "<p>Eigene Ziele fixieren, detailliert vorbereitet, auf Kundenbedürfnisse konzentrieren, auf jeden Fall ausführliche Agenda vorab schicken.</p><p>Programmierung:</p><p>Sei du selbst, Feedback geben, wenn etwas in die falsche Richtung läuft, Ziel im Auge behalten, nicht zu viel `kuscheln`, eher die Führung etwas übernehmen</p><p>Erwartung des Kunden an mich:</p><p>Bestätigung, Sicherheit, kann sich mit Kauf auf mich verlassen, Zeit für Austausch",
            "Sei du selbst, Zeit für persönlichen Austausch, evt. etwas Smalltalk",
            "Durchdachte Fragen stellen statt argumentieren, viel aktiv zuhören, öfter zusammenfassen, häufig nachfragen, erste Hilfen signalisieren",
            "Vermeidungsstrategie, kleine Schritte</p><p>Erst Vertrauen aufbauen, dann Geschäft, viel Infos, erklären, langsam vom Bekannten zum Neuen in kleinen Schritten führen, Führung übernehmen, kaufen helfen</p><p>Nutzen:</p><p>Vermeidung von Nachteilen, Nachhaltigkeit, nicht alles verändern müssen, Zuverlässigkeit, Service, bewährt, Referenzen, Kunde weiß, was auf ihn zukommt",
            "Zeit geben zum Nachdenken, aktiv Feedback einholen, genau drauf eingehen, ihm ´aus der Patsche´ helfen, Führung übernehmen",
            "Entscheidet wohlüberlegt, gemeinsam zusammenfassen, Restpunkte sauber abarbeiten, verbindliche Empfehlung aussprechen, zu einer Entscheidung führen, Sicherheiten geben, Vertrauen stärken, persönliche Zusagen",
            "Persönliches Feedback, persönliche Verfügbarkeit und weitere Unterstützung anbieten, nach Feedback fragen</p>",
          ],
          [
            "<p>Ausführlich informieren,</p><p>evt. Unterlagen vorab schicken, Produktdetails sauber und strukturiert vorbereitet, für mögliche weitere Themen vorbereitet sein, ausführliche Agenda vorab.</p><p>Programmierung:</p><p>Ich habe einen Plan, auf viele Detailfragen vorbereitet sein, Zeit mitbringen, eher formal bleiben, nicht zu emotional, kein `Kuschelfaktor`, Kunde ist vorbereitet, er ist Fachmann</p><p>Erwartung des Kunden an mich:</p><p>Ich bin ebenbürtiger Experte, Qualität, mit Kauf keinen Fehler machen, Sachlichkeit",
            "Sachlich, formal, etwas distanzierter,  i.d.R. kein Smalltalk, gleich zur Sache kommen, Agenda für heute abstimmen",
            "Planvoll und methodisch vorgehen, detaillierte Fragen stellen, Bedarf zusammenfassen, sauber dokumentieren",
            "Vermeidungsstrategie, Beweise</p><p>Plan erkennen lassen, Argumente logisch präsentieren, alle Details mit einbeziehen, Beweise liefern, Alternativen/ Optionen sauber herausarbeiten, kaufen lassen</p><p>Nutzen:</p><p>Betonen der Richtigkeit, Beweise liefern für Argumente und Ergebnisse, Qualität, Service, Prozesssicherheit, keine plötzlichen und gravierenden Veränderungen",
            "Fragen = Interesse, nicht persönlich nehmen, seine Bedenken mit ZDF sauber ausräumen, rationale und umfassende Antworten, nicht umfallen",
            "Entscheidet zögerlich, zusammenfassen, Restpunkte noch klären, Unterlagen anbieten, Zeit geben, um nochmal prüfen zu können, evt. Zeitpunkt zum Nachfassen vereinbaren",
            "Ergebnisse schriftlich zusammenfassen, zu vereinbartem Termin nachfassen, Vereinbarungen exakt einhalten, eher schriftlich kommunizieren</p>",
          ],
        ],
        // Verkäufer gewissenhaft
        [
          [
            "<p>Wesentliches ist gut vorbereitet, Details bereithalten, falls erforderlich. Agenda kurz und knapp vorab vorschlagen und Feedback erbitten.</p><p>Programmierung: </p><p>Kunde hat die Kontrolle und will schnell zum Ergebnis kommen, auf den Punkt kommen, klar und direkt sprechen, auf Wesentliches konzentrieren, nach vorne denken und handeln, nicht in Details verlieren, eigenes Tempo erhöhen, Gas geben</p><p>Erwartung des Kunden an mich:</p><p>Sparringspartner, schnelle Resultate, Alternativen, geht nicht gibt´s nicht",
            "Kurzes Warmup, nicht verkrampfen, aktiv bleiben, etwas lockern",
            "Bedarfe direkt erfragen, schnell auf den Punkt bringen, auf Ungeduld des Kunden achten, nicht in Details verzetteln",
            "Chancenstrategie, Optionen aufzeigen</p><p>Präsentation vom Groben (=Überschriften) bei Bedarf ins Feine (=Details), bei Ungeduld des Kunden Tempo beschleunigen, Optionen aufzeigen, Vorteile und Zielerreichung des Kunden betonen, ihn nicht mit Details aufhalten, kaufen lassen</p><p>Nutzen: </p><p>Effizienz, Ersparnisse, schnelle Gewinne, Chancen, eigener Machtgewinn, Kontrolle haben",
            "Einwände ernst nehmen und schnelle Lösungen anbieten, der Kunde hat Recht und das letzte Wort, ihm nichts beweisen wollen, engagiert bleiben",
            "Entscheidet schnell aufgrund von Fakten, Wahlmöglichkeiten lassen, Kunde entscheidet, schnell und direkt zum Abschluss kommen</p><p>Abschluss nicht mit zusätzlichen Aspekten verzögern, Erfolgsaussichten betonen",
            "Ergebnisse prägnant dokumentieren, Zwischenfeedback geben</p>",
          ],
          [
            "<p>Normal vorbereitet, auf spontane Richtungswechsel vorbereitet sein, weiß der Kunde schon, was er will? Agenda knapp aber alles drin.</p><p>Programmierung: </p><p>Mehr persönliche Anteilnahme zeigen als sonst, nicht alle Schleifen des Kunden mitgehen, positiv thinking, mit Details verschonen, ich bin für´s Strukturieren zuständig, evt. muss ich improvisieren, flexibel bleiben, nicht verkrampfen</p><p>Erwartung des Kunden an mich:</p><p>Beziehung zu mir finden, mir vertauen können, mit Kauf persönliche Vorteile haben, nicht so langweilig",
            "Etwas Smalltalk einplanen, lebhafter sein als sonst, Bühne für Selbstdarstellung geben, Kunde bestimmt den Einstieg in die Sache",
            "W-Fragen stellen, kommen lassen, aktiv zuhören, raushören, was er wirklich will (Kunde weiß es nicht immer), mehr Zeit dafür vorsehen, Details überspringen",
            "Chancenstrategie, Lösung moderieren</p><p>Kunde mit in die Lösungsfindung einbeziehen (moderieren), mit lösungsorientierten Fragen weiter aktivieren, Köder auslegen, Gründe liefern, damit er groß rauskommt, Gespräch strukturieren, engagiert und beweglich bleiben, mehr emotionale Ansprache als Details, kaufen helfen</p><p>Nutzen:</p><p>Die geniale Lösung, eigene Kräfte schonen, Wie kann er persönlich erfolgreich und gut dastehen?, hatte er ein `Kauferlebnis`?",
            "Einwände leicht nehmen, immer freundlich und locker bleiben, gemeinsame Lösung herausarbeiten, eher emotional als rational abholen",
            "Entscheidet spontan, emotionalen Point of Sale spüren, Abschluss aktiv herbeiführen, Empfehlung aussprechen, Zukunft ausmalen, nächste Schritte visualisieren",
            "Beziehung vertiefen, Zeit für Kundenpflege, will unterhalten werden, öfter einfach mal so kontaktieren</p>",
          ],
          [
            "<p>Sich auf die Person des Kunden einstellen, detailliert vorbereitet, auf Kundenbedürfnisse konzentrieren, auf jeden Fall ausführliche Agenda vorab schicken.</p><p>Programmierung:</p><p>Interesse an der Person zeigen, erst Emotion, dann Sache, geduldig sein, die weiche Seite mehr zeigen, Nähe zulassen, eher die Führung etwas übernehmen</p><p>Erwartung des Kunden an mich:</p><p>Bestätigung, Sicherheit, kann sich mit Kauf auf mich verlassen, mehr persönliche Nähe",
            "Zeit für persönlichen Austausch, evt. etwas Smalltalk, Nähe erzeugen",
            "Eher Fragen stellen statt argumentieren, viel aktiv zuhören, öfter zusammenfassen, häufig nachfragen, erste Hilfen signalisieren",
            "Vermeidungsstrategie, kleine Schritte</p><p>Erst Vertrauen aufbauen, dann Geschäft, emotionale Beziehung aufbauen, viel Infos, erklären, langsam vom Bekannten zum Neuen in kleinen Schritten führen, Führung übernehmen, kaufen helfen</p><p>Nutzen:</p><p>Vermeidung von Nachteilen, Nachhaltigkeit, nicht alles verändern müssen, Zuverlässigkeit, Service, bewährt, Referenzen, Kunde weiß, was auf ihn zukommt",
            "Wissen alleine überzeugt nicht, Zeit geben zum Nachdenken, aktiv Feedback einholen, genau drauf eingehen, ihm ´aus der Patsche´ helfen, Führung übernehmen",
            "Entscheidet wohlüberlegt, gemeinsam zusammenfassen, Restpunkte sauber abarbeiten, vorsichtige Empfehlung aussprechen, nicht mit noch mehr Details verwirren, persönliche Bindung stärken, persönliche Zusagen",
            "Persönliches Feedback, persönliche Verfügbarkeit und weitere Unterstützung anbieten, nach Feedback fragen</p>",
          ],
          [
            "<p>Ausführlich informieren,</p><p>evt. Unterlagen vorab schicken, Produktdetails sauber und strukturiert vorbereitet, für mögliche weitere Themen vorbereitet sein, ausführliche Agenda vorab.</p><p>Programmierung:</p><p>Sei du selbst, auf viele Detailfragen vorbereitet sein, Kunde ist vorbereitet, er ist Fachmann, nicht unbedingt Recht haben wollen</p><p>Erwartung des Kunden an mich:</p><p>Ich bin ebenbürtiger Experte, Qualität, mit Kauf keinen Fehler machen, fachsimpeln können",
            "i.d.R. kein Smalltalk, gleich zur Sache kommen, Agenda für heute abstimmen",
            "Planvoll und methodisch vorgehen, detaillierte Fragen stellen, Bedarf zusammenfassen, sauber dokumentieren, nicht im Detail verlieren, vor eigener Interpretation lieber nochmal nachfragen",
            "Vermeidungsstrategie, Beweise</p><p>Plan präsentieren, viel ZDF, alle Details mit einbeziehen, Beweise liefern, Alternativen/ Optionen sauber herausarbeiten, kaufen lassen</p><p>Nutzen:</p><p>Betonen der Richtigkeit, Beweise liefern für Argumente und Ergebnisse, Qualität, Service, Prozesssicherheit, keine plötzlichen und gravierenden Veränderungen",
            "Fragen = Interesse und nicht Dummheit, engagiert bleiben, seine Bedenken mit ZDF sauber ausräumen, rationale und umfassende Antworten",
            "Entscheidet zögerlich, zusammenfassen, Restpunkte noch klären, Unterlagen anbieten, Zeit geben, um nochmal prüfen zu können, evt. Zeitpunkt zum Nachfassen vereinbaren, persönliche Ebene etwas stärken, ",
            "Ergebnisse schriftlich zusammenfassen, zu vereinbartem Termin nachfassen, Vereinbarungen exakt einhalten, eher schriftlich kommunizieren</p>",
          ],
        ],
      ],

      phases: [
        "Presales",
        "Kontakt",
        "Bedarf",
        "Angebot",
        "Einwände",
        "Abschluss",
        "Aftersales",
      ],

      sellerType: "",
      buyerType: "",
    }
  },
  getters: {
    questions_seller(state) {
      return state.questions_seller;
    },
    questions_buyer(state) {
      return state.questions_buyer;
    },
    info(state) {
      return state.info;
    },
    phases(state) {
      return state.phases;
    },
    sellerType(state) {
      return state.sellerType;
    },
    buyerType(state) {
      return state.buyerType;
    },
  },
  mutations: {
    updateType(state, updateData) {
      if (updateData.role == "seller") {
        state.sellerType = updateData.type;
      }
      if (updateData.role == "buyer") {
        state.buyerType = updateData.type;
      }
    }
  },
  actions: {
    updateType(context, updateData) {
      context.commit("updateType", updateData); // Place to store in backend server
    }
  },
});

export default store;
