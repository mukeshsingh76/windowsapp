# Create Windows App using electron

## Create new project

> npm init
> npm install electron --save-dev
> npm install electron-packager --save-dev
> npm run package-win
> npm start

## App.js

```
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

//mainWindow.loadURL("file://" + \_\_dirname + "/index.html");

mainWindow.loadURL(
url.format({
pathname: path.join(\_\_dirname, "index.html"),
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
```

## index.html

```
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossorigin="anonymous">
    <title>Create Student</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <h1>Create Student</h1>
        </div>
        <div class="row">
            <form>
                <div class="form-group">
                    <label for="studentName">Name</label>
                    <input type="text" class="form-control" id="studentName" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="studentEmailId">Email</label>
                    <input type="email" class="form-control" id="studentEmailId" placeholder="Enter Email">
                </div>
                <div class="form-group">
                    <label for="studentPhone">Phone</label>
                    <input type="number" class="form-control" id="studentPhone" placeholder="Enter Phone">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</body>

</html>
```
