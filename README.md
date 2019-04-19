
# Web Design project

## Inhoudsopgave
1. [Gebruiker](#1-Gebruiker)
2. [Opdracht](#2-Opdracht)
3. [Onderzoek motorische stoornis](#3-Onderzoek-motorische-stoornis)
4. [Aannames over Marijn](#4-Aannames-over-Marijn)
5. [Vragen voor Marijn](#5-Vragen-voor-Marijn)
6. [Papieren schetsen](#6-Papieren-versies)
7. [Demo versies](#7-Demo-versies)
8. [Feedback 1](#8-Feedback-1)
9. [Concept](#9-Concept)
10. [Testplan 1](#10-Testplan-1) 

## 1. Gebruiker
Ik werk een opdracht uit voor de gebruiker Marijn. Marijn heeft een motorische stoornis en is daardoor niet in staat om een muis te gebruiken.

## 2. Opdracht
Ontwerp een date picker voor Marijn.
Hij reist veel met de trein, en hij moet van tevoren aangeven welke trein hij wil nemen zodat er iemand is om hem te helpen met zijn rolstoel. Date-pickers zijn over het algemeen priegelig, en niet ontworpen voor iemand die afhankelijk is van zijn toetsenbord?

## 3. Onderzoek motorische stoornis
Wanneer een kind een motorische achterstand heeft kan dit duiden op dyspraxie of DCD (Development Co-ordination Disorder), in het Nederlands, stoornis in de ontwikkeling van de coördinatie van bewegingen.

Kenmerken die we dan zien zijn: een houterige beweging, moeite met het doseren van kracht (b.v. veel te hard of zacht gooien met een bal), problemen met het starten of stoppen van een beweging op het juiste moment, trillen bij de aanzet tot een beweging, snel verlies van het evenwicht, moeilijk leesbaar handschrift, moeite met tijdsdruk en tragere verwerking van visuele informatie. Maar dyspraxie/ DCD kent vele verschijningsvormen en bij ieder kind kunnen weer andere kenmerken waargenomen worden. Bij het ene kind ligt het probleem vooral bij de taalontwikkeling bij het andere in de grove motoriek terwijl het derde kind juist moeite heeft met de fijne motoriek en een vierde zich vooral slecht kan concentreren. Dit maakt het moeilijker om de diagnose dyspraxie / DCD te stellen.

## 4. Aannames over Marijn
Omdat elk persoon met een motorisch stoornis, andere symptomen heeft, maak ik hier aannames over Marijn.
- Is niet in staat om een muis te gebruiken
- Gebruikt een toetsenbord met grote knoppen
- Is in staat om relatief normaal te praten. Dus een oplossing met spraak zou kunnen.
- Houd niet van effecten en animaties

## 5. Vragen voor Marijn
1. Hoe navigeer je het internet?
2. Zou een spraak oplossing je helpen?
3. Heb je een aangepast toetsenbord die je gebruikt?
4. Kun je website voorbeelden noemen die je makkelijk kunt gebruiken?

### Antwoorden van de leraar
In de eerste week had Marijn jammer genoeg geen tijd om langs te komen. Hierdoor heeft de leraar alle vragen zo goed mogelijk beantwoordt.

1. Marijn gebruikt de tab toets, sticky keys en de enter toets om te navigeren.
2. Een spraak oplossing gaat niet werken omdat Marijn moeite heeft om duidelijk te praten.
3. Marijn gebruikt gewoon een standaard (MacBook) toetsenbord.
4. Geen antwoord op vanwege afwezigheid.

### Over Marijn
- Gebruikt sticky keys
- Gebruikt 1 hand (linkerhand)
- Moeite met motoriek
- Optillen van hand heeft hij moeite mee
- Moeite met praten

Meer heb ik helaas niet kunnen noteren omdat hij niet aanwezig kon zijn.

## 6. Papieren schetsen
Voordat ik digitale versies ging maken, ben ik eerst gaan schetsen op papier.
![Schets 1](docs/schets-1.jpg)
![Schets 2](docs/schets-2.jpg)
![Schets 3](docs/schets-3.jpg)
![Schets 4](docs/schets-4.jpg)

## 7. Demo versies
### Demo 1
In deze demo zijn de dagen, maanden en jaren los van elkaar getrokken. Deze data is groot in beeld gebracht zodat het makkelijk te lezen is. Hier kun je met de tab toets en de pijltoetsen doorheen navigeren.
Omdat het een demo versie is, is alleen het jaar laten zien, maar de maanden en dagen zouden op dezelfde manier eruit zien.
![Demo 1](docs/demo-1.jpg)

### Demo 2
Deze versie is uitgewerkt van demo 1. Het is op een andere manier vormgegeven om te testen wat fijner werkt voor Marijn. Hier zijn de maanden en dagen losgekoppeld en kun je beide data appart selecteren.
![Demo 1](docs/demo-2.jpg)

### Demo 3
Hier heb ik geprobeerd om te werken met spraak naar tekst. Ik had deze demo gemaakt voordat ik wist dat Marijn moeite had met praten. Deze oplossing zou hem niet kunnen helpen.
![Demo 1](docs/demo-3.jpg)

## 8. Feedback 1
Mooie demo's. Sommige demo's werken wel voor het een doelstelling maar de andere weer moeilijker. Spraak herkenning gaat jammer genoeg niet werken.

Kijk eens naar datepicker suggesties, wat kun je daarmee doen voor Marijn. Input velden voor een naam bijvoorbeeld geven vaak al een suggesties om je naam daar automatisch in te voeren of je adres, maar bij een datepicker is dat vaak nog niet het geval.

En hoe zou een range selector werken met een toetsenbord?

## Concept
Ik ga verder met de datepicker om daar een oplossing voor te bedenken die Marijn kan helpen als hij een datum moet invoeren. Ik wil een demo maken voor een datepicker, die suggesties geeft op basis wat je eerder hebt ingevoerd en ook een optie voor je geboortedatum. Mocht de juiste suggestie er niet tussen staan, dan kun je altijd zelf de gewenste datum invullen. Dit moet dan wel op een manier gebeuren dat het makkelijk kan met een toetsenbord.

## Testplan 1
### User scenario
Marijn heeft een motorische stoornis en gebruikt het web met zijn toetsenbord. Nu wil Marijn naar Amsterdam gaan met de trein, maar daar heb je een OV chipkaart voor nodig. Gelukkig kun je heel gemakkelijk een OV chipkaart aanvragen online. Marijn heeft al veel moeite om tot de aanvraag scherm te komen op de website van OV Chipkaart. Uiteindelijk moet hij ook zijn geboortedatum invullen. Maar hier heeft hij veel moeite mee aangezien het allemaal op de juiste manier ingevuld moet worden. Het zou voor Marijn heel makkelijk zijn als hij dit met zijn toetsenbord in kon vullen.

Nu is er een datepicker die je heel makkelijk met je toetsenbord kan invullen en die ook suggesties geeft op basis wat je eerder op andere websites hebt ingevuld. Heb je bijvoorbeeld bij de belastingsdienst een datum ingevuld, dan komt diezelfde datum ook als suggestie bij de datepicker te staan.

### Wat wil ik testen?
1.  Invullen van een datum zonder suggesties
2. Invullen van een datum met een suggestie
3. Navigatie met het toetsenbord
4. Acces keys
5. Zou deze oplossing je helpen met een datepicker

### Na de test
Tijdens de test heb ik genoteerd wat mij opgevallen is van Marijn:
- Gebruikt de spatiebalk om te scrollen
- Gebruikt zijn trackpad ook maar weinig
- Wil graag zo weinig mogelijk toetsen indrukken
- Elementen dicht bij elkaar is fijner
- Kan zijn tab toetsen gebruiken

Tijdens mijn demo test, heb ik het volgende opgeschreven om te verbeteren:
- Je kunt teveel cijfers invullen bij de dagen
- Cijfer van de maand indrukken zodat die geselecteerd word
- Kijken naar de jaar zodat die makkelijker wordt

Het invullen van een datum met of zonder suggestie gaat best goed. Het navigeren met de toetsenbord gaat ook prima op sommigen punten na. Ik heb nog niet kunnen laten testen om acces keys te testen. Deze laat ik erin staan en laat ik hem volgende keer proberen.