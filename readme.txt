1. Git Projekt anlegen
2. 'yo angular' im Projektverzeichnis starten
3. grunt serve
  falls es zu Fehler kommt, im gruntfile ändern:
  in der Komponente wiredep die Options entfernen:
      options: {
        cwd: '<%= yeoman.app %>'
      },

Webstorm Projekt anlegen: https://www.jetbrains.com/webstorm/help/using-git-integration.html

