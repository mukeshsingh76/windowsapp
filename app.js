const electrol = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow, Menu } = electrol;
var mainWindow;

app.on("ready", function() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 756,
    backgroundColor: "#2e2c29"
  });

  //mainWindow.loadURL("file://" + __dirname + "/index.html");

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
  {
    label: "Student",
    submenu: [
      {
        label: "Create Student"
      },
      {
        label: "View Student"
      },
      {
        label: "Exit",
        click() {
          app.quit();
        }
      }
    ]
  }
];
