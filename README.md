# ionicapp


Projektdokumentation Ionic App mit Front und Backend

Schritt 1: Einrichten der Entwicklungsumgebung
Vor der Entwicklung meiner Website musste ich zunächst die Entwicklungsumgebung einrichten. Dazu verwendete ich Node.js und den Package-Manager npm. Sobald diese Tools installiert waren, wurde Ionic Angular über den Befehl "npm install -g ionic angular" installiert.

Schritt 2: Erstellen einer neuen Ionic-Anwendung
Nachdem Ionic und Angular erfolgreich installiert wurden, habe ich eine neue Anwendung mit dem Befehl "ionic start myApp blank" verwendet, um eine neue, leere Anwendung zu erstellen. Dieser Befehl erstellt ein neues Verzeichnis mit dem Namen "myApp" und initialisiert es als eine neue Ionic-Anwendung.

Schritt 3: Erstellen von Frontend-Komponenten
Nachdem ich meine neue Anwendung erstellt habe, habe ich mit der Erstellung von Frontend-Komponenten begonnen. Dazu wurden Angular-Komponenten verwendet, die ich über den Befehl "ionic generate" erstellt habe. 

(Beispielsweise können Sie den Befehl "ionic generate component myComponent" verwenden, um eine neue Komponente mit dem Namen "myComponent" zu erstellen.)

Schritt 4: Implementieren von Backend-Funktionalitäten
Nachdem ich mein Backend eingerichtet habe, konnte ich es in die Frontendkomponenten integrieren, indem HTTP-Anfragen verwendet wurden.


Schritt 5: Testen und Bereitstellen der Anwendung
Nachdem die Anwendung vollständig entwickelt wurde, habe ich mit den Befehlen ‘ionic serve’ und ‘ionic lab’ die Anwendung im Webbrowser getestet. Funktionen wie ionic emulate und ionic run sind nützlich, um die Anwendung auf emulierten oder tatsächlichen Geräten testen zu können.
Sobald alle Tests erfolgreich durchgeführt wurden,habe ich meine Anwendung bereit gestellt. 
(Ionic bietet verschiedene Möglichkeiten zum Bereitstellen von Anwendungen, wie z.B. das Hochladen in den App Store oder Google Play Store, das Erstellen von APK- oder IPA-Dateien, oder das Veröffentlichen als Progressive Web App (PWA).)


Resumee:

Ionic Angular ist ein mächtiges Framework, das es Entwicklern ermöglicht, mobile Anwendungen für iOS, Android und den Webbrowser zu erstellen. Mit seiner Unterstützung für Angular und Apache Cordova, und seinen eigenen Tools, ermöglicht es die schnelle und effiziente Entwicklung sowohl des Frontends als auch des Backends. Es bietet auch viele Möglichkeiten zum Testen und Bereitstellen der Anwendungen.




Here is a list of features, that the App shall fulfil:

- [x] It must be a Client-Server-Application with Front- and Backend

- [x] The programming language must be TypeScript

- [x] The frontend must use Vue3 with routing

- [x] Must follow the Corporate Identity of THD/DIT

- [x] Usable on mobile phones (Android, IOS) and PC

- [x] The backend must use ExpressJS (version 4 or 5, with TypeScript)

- [x] The frontend must use Bootstrap with SASS

- [x] There must be an input form with user data in the frontend

- [x] It must use a REST API within a webpage, e.g. openmensa.org



## Installation:

1. Source des Repositorys kopieren

   ```sh
   git clone https://github.com/Fuchsei/ionicapp.git
   ```


2. Ionic CLI installieren

   ```sh
   npm install -g @ionic/cli
   ```

   > Globale Installation ist empfohlen

3. In Ionic Root verzeichnis wechseln

   ```sh
   cd ./my-app/
   ```


3. App starten

   ```sh
   ionic.cmd serve
   ```
