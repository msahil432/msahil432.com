import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public notified: boolean = false;
  public myname: string = 'Sahil Malik';
  public mytag: string = "Getting Things Done!";
  public myMoto: string = "Everything can be improved. Similarly, Every Code can be Optimised.";
  public myQualities: Array<string> = [
    "Hard Working", "Can Work under Pressure", "Tech Savy", "Honest", "Friendly and Team Member", "Loves Astrophysics"
  ];
  public mySocio: Array<{name: string, username:string, link:string, image:string}> = [
                    {name:"LinkedIn", username:"msahil432", link:"https://linkedin.com/in/msahil432", image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMyLDMwYzAsMS4xMDQtMC44OTYsMi0yLDJIMmMtMS4xMDQsMC0yLTAuODk2LTItMlYyYzAtMS4xMDQsMC44OTYtMiwyLTJoMjhjMS4xMDQsMCwyLDAuODk2LDIsMlYzMHoiIGZpbGw9IiMwMDdCQjUiLz48Zz48cmVjdCBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE0IiB3aWR0aD0iNCIgeD0iNyIgeT0iMTEiLz48cGF0aCBkPSJNMjAuNDk5LDExYy0yLjc5MSwwLTMuMjcxLDEuMDE4LTMuNDk5LDJ2LTJoLTR2MTRoNHYtOGMwLTEuMjk3LDAuNzAzLTIsMi0yYzEuMjY2LDAsMiwwLjY4OCwyLDJ2OGg0di03ICAgIEMyNSwxNCwyNC40NzksMTEsMjAuNDk5LDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI4IiBmaWxsPSIjRkZGRkZGIiByPSIyIi8+PC9nPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="},
                    {name:"Stack Overflow", username:"5634251", link:"https://stackoverflow.com/users/5634251/sahil-malik", image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNMjU3LjEsNTA3LjlDMTE5LjcsNTA3LjQsNy45LDM5Ni41LDguNCwyNTUuOUM4LjgsMTE3LjYsMTE5LjgsNC42LDI2MC4yLDYuMiAgIGMxMzQuNiwxLjUsMjQ2LjMsMTExLjIsMjQ1LjQsMjUyLjZDNTA0LjgsMzk2LjgsMzk0LjYsNTA3LjMsMjU3LjEsNTA3Ljl6IE0yNTYuOSwyNS45QzEzMS4xLDI1LjYsMjkuNCwxMjguMiwyOC4xLDI1NC4yICAgYy0xLjMsMTMxLjIsMTAzLjIsMjMyLjcsMjI2LjIsMjM0YzEyOC4xLDEuMywyMzAuNy0xMDIuNSwyMzEuNi0yMjkuMUM0ODYuOSwxMjguNSwzODIuMiwyNS40LDI1Ni45LDI1Ljl6IiBmaWxsPSIjQkNCQkJCIi8+PHBhdGggZD0iTTE0Ny4xLDQzMGMwLTQ2LTAuMS05Mi0wLjItMTM4YzAtMy40LDEuMy00LjMsNC40LTQuMWM0LjMsMC4yLDguNywwLjMsMTMsMGM0LjUtMC40LDUuOSwxLDUuOSw1LjcgICBjLTAuMiwzNS43LTAuMSw3MS4zLTAuMSwxMDdjMCwxLjIsMC4xLDIuMywwLDMuNWMtMC4yLDIuNywxLjEsNCwzLjgsMy45YzEtMC4xLDIsMCwzLDBjNTUuNywwLDExMS4zLTAuMSwxNjcsMC4xICAgYzUuMSwwLDYuNC0xLjMsNi4zLTYuNGMtMC4yLTM2LDAtNzItMC4yLTEwOGMwLTQuNSwxLTYuMyw1LjgtNS45YzQuMywwLjQsOC43LDAuNCwxMywwYzQuMy0wLjQsNS4yLDEuMyw1LjIsNS40ICAgYy0wLjEsNDQtMC4xLDg4LTAuMSwxMzJjMCwxLjYsMC41LDMuNC0wLjgsNC44QzI5Ny44LDQzMCwyMjIuNCw0MzAsMTQ3LjEsNDMweiIgZmlsbD0iI0JDQkJCQiIvPjxwYXRoIGQ9Ik0xOTcuNSwzMDUuMWMzMS4xLDMsNjEuNSw1LjksOTEuOCw4LjdjMTIuMywxLjIsMjQuNSwyLjMsMzYuOCwzLjJjMy4yLDAuMiw0LjQsMS4xLDMuOSw0LjUgICBjLTAuOSw3LjMtMS41LDE0LjYtMi4xLDIxLjljLTAuMiwyLjctMS40LDMuMS0zLjksMi45Yy0yNC45LTIuNC00OS43LTQuNi03NC42LTYuOGMtMTcuNC0xLjYtMzQuOC0zLjEtNTIuMi00LjcgICBjLTYuNS0wLjYtNi41LTAuNS01LjktN2MwLjYtNi4xLDEuNC0xMi4yLDEuNy0xOC40QzE5My4zLDMwNS43LDE5NC41LDMwNC4xLDE5Ny41LDMwNS4xeiIgZmlsbD0iI0YzODEyNyIvPjxwYXRoIGQ9Ik0yMDguOSwyNDQuMWMzLjksMS4xLDguMywyLjIsMTIuNiwzLjRjMzcuNSwxMC4xLDc1LjEsMjAuMywxMTIuNywzMC4zYzQuNCwxLjIsNSwyLjcsMy43LDYuOCAgIGMtMi4xLDYuMy0zLjYsMTIuOC01LjIsMTkuMmMtMC43LDIuOS0yLjEsMy42LTUsMi44Yy0zMi4xLTguNy02NC4yLTE3LjMtOTYuMy0yNmMtOS42LTIuNi0xOS4yLTUuMi0yOC45LTcuOCAgIGMtMi41LTAuNy0zLjUtMS41LTIuNy00LjRjMi4xLTcsMy44LTE0LjEsNS43LTIxLjJDMjA2LjEsMjQ1LjgsMjA2LDI0My43LDIwOC45LDI0NC4xeiIgZmlsbD0iI0YzODEyNyIvPjxwYXRoIGQ9Ik0zOTIuNywyMjMuMWMtMS45LDAuNS0yLjMtMS4xLTIuNy0zLjJjLTYuOS0zOS44LTEzLjktNzkuNi0yMC44LTExOS41Yy0wLjItMS4zLTAuMi0yLjctMC40LTQgICBjLTEuMi04LjUtMS4yLTguNSw3LjUtOS45YzUuNi0wLjksMTEuMi0xLjgsMTYuNy0zYzIuOC0wLjYsMy40LDAuNCwzLjksMi44YzcuMyw0Mi41LDE0LjYsODQuOSwyMiwxMjcuM2MwLjYsMy40LDAuMSw1LjEtMy44LDUuNSAgIEM0MDcuOCwyMjAuMiw0MDAuNiwyMjEuNywzOTIuNywyMjMuMXoiIGZpbGw9IiNGMzgxMjciLz48cGF0aCBkPSJNMjM5LjMsMTc2LjhjMC45LDAuNCwyLDAuOSwzLDEuNWMzNy4xLDIxLjksNzQuMSw0My44LDExMS4zLDY1LjZjMi42LDEuNSwyLjYsMi44LDEuMiw1ICAgYy0zLjcsNi4xLTcuNSwxMi4yLTEwLjksMTguNWMtMS44LDMuMy0zLjUsMy02LjIsMS40Yy0yMC43LTEyLjMtNDEuNS0yNC41LTYyLjMtMzYuOGMtMTYuMi05LjUtMzIuMy0xOS4yLTQ4LjYtMjguNiAgIGMtMi45LTEuNy0zLjMtMi45LTEuNS01LjdjMy45LTYuMiw3LjUtMTIuNiwxMS4yLTE4LjhDMjM3LjIsMTc3LjgsMjM3LjcsMTc2LjYsMjM5LjMsMTc2Ljh6IiBmaWxsPSIjRjM4MTI3Ii8+PHBhdGggZD0iTTMwNy43LDExMi4yYzEuNywwLjQsMS45LDEuNywyLjYsMi42YzE5LjQsMjguNCwzOC44LDU2LjksNTguMiw4NS4zYzUuMSw3LjQsMTAsMTQuOSwxNS4yLDIyLjMgICBjMS41LDIuMSwxLjUsMy4yLTAuOCw0LjdjLTYuMSw0LTEyLjIsOC4xLTE4LjEsMTIuNGMtMi42LDEuOS00LjEsMS42LTUuOS0xLjFjLTEyLjYtMTguOC0yNS40LTM3LjQtMzguMi01Ni4xICAgYy0xMS4zLTE2LjYtMjIuNi0zMy4zLTM0LjEtNDkuOGMtMi4zLTMuMy0xLjktNC45LDEuNC03YzUuOS0zLjcsMTEuNi03LjgsMTcuNC0xMS43QzMwNi4zLDExMy4yLDMwNy4xLDExMi42LDMwNy43LDExMi4yeiIgZmlsbD0iI0YzODEyNyIvPjxwYXRoIGQ9Ik0yNTguMywzODQuMmMtMjEuMSwwLTQyLjMtMC4xLTYzLjQsMC4xYy0zLjcsMC01LjQtMC42LTUuMS00LjhjMC40LTYuNiwwLjItMTMuMywwLTIwICAgYy0wLjEtMy4xLDAuNS00LjQsNC4xLTQuNGM0My4xLDAuMSw4Ni4yLDAuMSwxMjkuMywwYzMuMywwLDMuOSwxLjIsMy44LDQuMWMtMC4yLDctMC4yLDE0LDAsMjFjMC4xLDMuNC0xLjEsNC4yLTQuMyw0LjEgICBDMzAxLjMsMzg0LjEsMjc5LjgsMzg0LjEsMjU4LjMsMzg0LjJDMjU4LjMsMzg0LjEsMjU4LjMsMzg0LjEsMjU4LjMsMzg0LjJ6IiBmaWxsPSIjRjM4MDI2Ii8+PHBhdGggZD0iTTE0Ny4xLDQzMGM3NS4zLDAsMTUwLjcsMCwyMjYsMGMtMS40LDEuNy0zLjQsMS01LjEsMWMtNzEuOCwwLTE0My41LDAtMjE1LjMsMCAgIEMxNTAuOCw0MzEsMTQ4LjYsNDMxLjksMTQ3LjEsNDMweiIgZmlsbD0iI0RBQkVBOCIvPjwvZz48L3N2Zz4="},
                    {name:"Github", username:"msahil432", link:"https://github.com/msahil432", image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxMDI0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTEyIDBDMjI5LjI1IDAgMCAyMjkuMjUgMCA1MTJjMCAyMjYuMjUgMTQ2LjY4OCA0MTguMTI1IDM1MC4xNTYgNDg1LjgxMiAyNS41OTQgNC42ODggMzQuOTM4LTExLjEyNSAzNC45MzgtMjQuNjI1IDAtMTIuMTg4LTAuNDY5LTUyLjU2Mi0wLjcxOS05NS4zMTJDMjQyIDkwOC44MTIgMjExLjkwNiA4MTcuNSAyMTEuOTA2IDgxNy41Yy0yMy4zMTItNTkuMTI1LTU2Ljg0NC03NC44NzUtNTYuODQ0LTc0Ljg3NS00Ni41MzEtMzEuNzUgMy41My0zMS4xMjUgMy41My0zMS4xMjUgNTEuNDA2IDMuNTYyIDc4LjQ3IDUyLjc1IDc4LjQ3IDUyLjc1IDQ1LjY4OCA3OC4yNSAxMTkuODc1IDU1LjYyNSAxNDkgNDIuNSA0LjY1NC0zMyAxNy45MDQtNTUuNjI1IDMyLjUtNjguMzc1QzMwNC45MDYgNzI1LjQzOCAxODUuMzQ0IDY4MS41IDE4NS4zNDQgNDg1LjMxMmMwLTU1LjkzOCAxOS45NjktMTAxLjU2MiA1Mi42NTYtMTM3LjQwNi01LjIxOS0xMy0yMi44NDQtNjUuMDk0IDUuMDYyLTEzNS41NjIgMCAwIDQyLjkzOC0xMy43NSAxNDAuODEyIDUyLjUgNDAuODEyLTExLjQwNiA4NC41OTQtMTcuMDMxIDEyOC4xMjUtMTcuMjE5IDQzLjUgMC4xODggODcuMzEyIDUuODc1IDEyOC4xODggMTcuMjgxIDk3LjY4OC02Ni4zMTIgMTQwLjY4OC01Mi41IDE0MC42ODgtNTIuNSAyOCA3MC41MzEgMTAuMzc1IDEyMi41NjIgNS4xMjUgMTM1LjUgMzIuODEyIDM1Ljg0NCA1Mi42MjUgODEuNDY5IDUyLjYyNSAxMzcuNDA2IDAgMTk2LjY4OC0xMTkuNzUgMjQwLTIzMy44MTIgMjUyLjY4OCAxOC40MzggMTUuODc1IDM0Ljc1IDQ3IDM0Ljc1IDk0Ljc1IDAgNjguNDM4LTAuNjg4IDEyMy42MjUtMC42ODggMTQwLjUgMCAxMy42MjUgOS4zMTIgMjkuNTYyIDM1LjI1IDI0LjU2MkM4NzcuNDM4IDkzMCAxMDI0IDczOC4xMjUgMTAyNCA1MTIgMTAyNCAyMjkuMjUgNzk0Ljc1IDAgNTEyIDB6Ii8+PC9zdmc+"},
                    {name:"Gitlab", username:"msahil432", link:"https://gitlab.com/msahil432", image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDUwOC4zMyA1MDguMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDojZmFmYWZhO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTN7bWFzazp1cmwoI21hc2spO30uY2xzLTR7ZmlsbDojZmM2ZDI2O30uY2xzLTV7ZmlsbDojZTI0MzI5O30uY2xzLTZ7ZmlsbDojZmNhMzI2O308L3N0eWxlPjxtYXNrIGhlaWdodD0iNzE2LjgiIGlkPSJtYXNrIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTIyMS44MSIgeD0iLTEyMS41MiIgeT0iLTEyMi42NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuODMgLTEuODIpIj48ZyBpZD0ibWFzay0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0tMTE5LjY5LTEyMC44MkgxMTAyLjEzVjU5NkgtMTE5LjY5di03MTYuOFoiIGlkPSJwYXRoLTEiLz48L2c+PC9nPjwvbWFzaz48L2RlZnM+PHRpdGxlLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00ODUsMjkuNzJjMTEuNDUsMTUuMTMsMTYuNjEsNDAuMjEsMTkuMTUsNzAuNywzLjM2LDQ1LjUsNC43MSwxMDAuMSw2LDE1Ni41Mi0xLjY3LDU3LjQ3LTIuMzUsMTE1LjQzLTYsMTU2LjUyLTIuODgsMzEuNTQtOSw1Mi42Ni0xOS4yMiw2NS40Ny0xMywxMi43OS0zNy45NCwyMy41OS03My41LDI2LjE1LTQzLjI1LDMuNjktOTYuNjEsMy42NS0xNTUuNDgsNS4xLTY1LjQ0LTEuMTItMTA5LjgyLS42NC0xNTYuMzgtNS4wOC0zNi4zMi0yLjUyLTYwLjA4LTEzLjE5LTc0LjctMjYuMDctMTAuODMtMTQuNTQtMTQtMzAtMTctNjYuMjQtMy43NS00MS44NS00LjU4LTk4LjU2LTYtMTU1LjU0QzQsMjAwLjU3LDQuMTMsMTQzLjQ0LDcuOSwxMDAuNzQsMTAuNDMsNjcuMDUsMTQuNDIsNDQuNCwyNC42NSwzMCwzOSwxNy43Nyw2My40OCwxMS42OSwxMDAsOC42OWM1MC01Ljg1LDEwMi4wNi03LDE1NS44OC02Ljg3LDU1LjM5LjA5LDEwOC41NiwxLjY3LDE1Niw2LjM0LDMyLDIuNTYsNTguNDgsOC4wNyw3My4wNywyMS41NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjgzIC0xLjgyKSIvPjxnIGlkPSJQYWdlLTEiPjxnIGRhdGEtbmFtZT0iZ2l0bGFiIGxvZ28iIGlkPSJnaXRsYWJfbG9nbyI+PGcgaWQ9ImcxMCI+PGcgaWQ9ImcxNiI+PGcgaWQ9ImcxOC1DbGlwcGVkIj48ZyBjbGFzcz0iY2xzLTMiPjxnIGlkPSJnMTgiPjxnIGlkPSJnNDQiPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTQwMC4zMiwyNTcuNDdsLTE2Ljg0LTUxLjgxTDM1MC4xMSwxMDNhNS43NCw1Ljc0LDAsMCwwLTEwLjkxLDBMMzA1Ljg0LDIwNS42NUgxOTVMMTYxLjY3LDEwM2E1Ljc0LDUuNzQsMCwwLDAtMTAuOTEsMEwxMTcuNCwyMDUuNjVsLTE2LjgzLDUxLjgxYTExLjQ3LDExLjQ3LDAsMCwwLDQuMTcsMTIuODJMMjUwLjQ0LDM3Ni4xNiwzOTYuMTUsMjcwLjI5YTExLjQ3LDExLjQ3LDAsMCwwLDQuMTctMTIuODIiIGlkPSJwYXRoNDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjgzIC0xLjgyKSIvPjwvZz48ZyBpZD0iZzQ4Ij48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0yNTAuNDQsMzc2LjE2aDBsNTUuNC0xNzAuNUgxOTVsNTUuNCwxNzAuNVoiIGlkPSJwYXRoNTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjgzIC0xLjgyKSIvPjwvZz48ZyBpZD0iZzU2Ij48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yNTAuNDQsMzc2LjE2LDE5NSwyMDUuNjVIMTE3LjRsMTMzLDE3MC41WiIgaWQ9InBhdGg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuODMgLTEuODIpIi8+PC9nPjxnIGlkPSJnNjQiPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTExNy40LDIwNS42NWgwbC0xNi44NCw1MS44MWExMS40NywxMS40NywwLDAsMCw0LjE3LDEyLjgyTDI1MC40NCwzNzYuMTZsLTEzMy0xNzAuNVoiIGlkPSJwYXRoNjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjgzIC0xLjgyKSIvPjwvZz48ZyBpZD0iZzcyIj48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0xMTcuNCwyMDUuNjVIMTk1TDE2MS42NywxMDNhNS43Myw1LjczLDAsMCwwLTEwLjkxLDBMMTE3LjQsMjA1LjY1WiIgaWQ9InBhdGg3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuODMgLTEuODIpIi8+PC9nPjxnIGlkPSJnNzYiPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTI1MC40NCwzNzYuMTZsNTUuNC0xNzAuNWg3Ny42NGwtMTMzLDE3MC41WiIgaWQ9InBhdGg3OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuODMgLTEuODIpIi8+PC9nPjxnIGlkPSJnODAiPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTM4My40OCwyMDUuNjVoMGwxNi44NCw1MS44MWExMS40NywxMS40NywwLDAsMS00LjE3LDEyLjgyTDI1MC40NCwzNzYuMTZsMTMzLTE3MC41WiIgaWQ9InBhdGg4MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuODMgLTEuODIpIi8+PC9nPjxnIGlkPSJnODQiPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTM4My40OCwyMDUuNjVIMzA1Ljg0TDMzOS4yMSwxMDNhNS43Myw1LjczLDAsMCwxLDEwLjkxLDBsMzMuMzcsMTAyLjY5WiIgaWQ9InBhdGg4NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuODMgLTEuODIpIi8+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="},
                    {name:"Twitter", username:"msahil432", link:"https://twitter.com/msahil432", image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMzYyNiIKICAgdmlld0JveD0iMCAwIDMwMC4wMDAwNiAyNDQuMTg3MDMiCiAgIGhlaWdodD0iMjQ0LjE4NzAzIgogICB3aWR0aD0iMzAwLjAwMDA2Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzYyOCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGEzNjMxIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MzkuMTc5NDYsLTU2OC44NTc3NykiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzNjExIgogICAgICAgc3R5bGU9ImZpbGw6IzFkYTFmMjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gNjMzLjg5ODIzLDgxMi4wNDQ3OSBjIDExMi40NjAzOCwwIDE3My45NTYyNywtOTMuMTY3NjUgMTczLjk1NjI3LC0xNzMuOTU2MjUgMCwtMi42NDYyOCAtMC4wNTM5LC01LjI4MDYyIC0wLjE3MjYsLTcuOTAzMDUgMTEuOTM3OTksLTguNjMwMTYgMjIuMzE0NDYsLTE5LjM5OTk5IDMwLjQ5NzYyLC0zMS42NTk4NCAtMTAuOTU0NTksNC44NjkzNyAtMjIuNzQzNTgsOC4xNDc0MSAtMzUuMTEwNzEsOS42MjU1MSAxMi42MjM0MSwtNy41NjkyOSAyMi4zMTQ0NiwtMTkuNTQzMDQgMjYuODg1ODMsLTMzLjgxNzM5IC0xMS44MTI4NCw3LjAwMzA3IC0yNC44OTUxNywxMi4wOTI5NyAtMzguODIzODMsMTQuODQwNTUgLTExLjE1NzIzLC0xMS44ODQzNiAtMjcuMDQwNzksLTE5LjMxNjU1IC00NC42Mjg5MiwtMTkuMzE2NTUgLTMzLjc2Mzc0LDAgLTYxLjE0NDI2LDI3LjM4MDUyIC02MS4xNDQyNiw2MS4xMzIzMyAwLDQuNzk3ODQgMC41MzY0LDkuNDY0NTggMS41ODUzOCwxMy45NDA1NyAtNTAuODE1NDYsLTIuNTU2ODYgLTk1Ljg3MzUzLC0yNi44ODU4MiAtMTI2LjAyNTQ2LC02My44Nzk5MSAtNS4yNTA4Miw5LjAzNTQ1IC04LjI3ODUyLDE5LjUzMTExIC04LjI3ODUyLDMwLjczMDA2IDAsMjEuMjExODYgMTAuNzkzNjYsMzkuOTM4MzcgMjcuMjA3NjYsNTAuODkyOTYgLTEwLjAzMDc3LC0wLjMwOTkyIC0xOS40NTM2MywtMy4wNjM0OCAtMjcuNjkwNDQsLTcuNjQ2NzYgLTAuMDA5LDAuMjU2NTIgLTAuMDA5LDAuNTA2NjEgLTAuMDA5LDAuNzgwNzcgMCwyOS42MDk1NyAyMS4wNzQ3OCw1NC4zMzE5IDQ5LjA1MTMsNTkuOTM0MzUgLTUuMTM3NTcsMS40MDA2MiAtMTAuNTQzMzUsMi4xNTE1OCAtMTYuMTIxOTYsMi4xNTE1OCAtMy45MzM2NCwwIC03Ljc2NTk2LC0wLjM4NzE2IC0xMS40OTA5OSwtMS4xMDI2IDcuNzgzODMsMjQuMjkzMiAzMC4zNTQ1Nyw0MS45NzA3MyA1Ny4xMTUyNSw0Mi40NjU0MyAtMjAuOTI1NzgsMTYuNDAyMDcgLTQ3LjI4NzEyLDI2LjE3MDYyIC03NS45MzcxMiwyNi4xNzA2MiAtNC45Mjg5OCwwIC05Ljc5ODM0LC0wLjI4MDM2IC0xNC41ODQyNywtMC44NDYzNCAyNy4wNTg2OCwxNy4zNDM3OSA1OS4xODkzNiwyNy40NjM5NiA5My43MjE5MywyNy40NjM5NiIgLz4KICA8L2c+Cjwvc3ZnPgo="},
                    {name:"Google Play", username:"MSAHIL432.com", link:"https://play.google.com/store/apps/developer?id=MSAHIL432.com", image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgd2lkdGg9Ijk2cHgiIGhlaWdodD0iOTZweCI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgZmlsbDojNERCNkFDOyIgZD0iTSA3LjcwMzEyNSA0LjA0Mjk2OSBDIDcuMjkyOTY5IDQuMTQ4NDM4IDcgNC41MDc4MTMgNyA1LjEyMTA5NCBDIDcgNi45MjE4NzUgNyAyMy45MTQwNjMgNyAyMy45MTQwNjMgQyA3IDIzLjkxNDA2MyA3IDQyLjI4MTI1IDcgNDMuMDg5ODQ0IEMgNyA0My41MzUxNTYgNy4xOTUzMTMgNDMuODM1OTM4IDcuNSA0My45NDUzMTMgTCAyNy42Nzk2ODggMjMuODgyODEzIFogIi8+CjxwYXRoIHN0eWxlPSIgZmlsbDojRENFNzc1OyIgZD0iTSAzMy4yMzgyODEgMTguMzU5Mzc1IEwgMjQuOTI5Njg4IDEzLjU2MjUgQyAyNC45Mjk2ODggMTMuNTYyNSA5LjY4MzU5NCA0Ljc2MTcxOSA4Ljc4OTA2MyA0LjI0MjE4OCBDIDguNDAyMzQ0IDQuMDE5NTMxIDguMDE5NTMxIDMuOTYwOTM4IDcuNzAzMTI1IDQuMDQyOTY5IEwgMjcuNjgzNTk0IDIzLjg4MjgxMyBaICIvPgo8cGF0aCBzdHlsZT0iIGZpbGw6I0QzMkYyRjsiIGQ9Ik0gOC40MTc5NjkgNDMuODAwNzgxIEMgOC45NDkyMTkgNDMuNDkyMTg4IDIzLjY5OTIxOSAzNC45NzY1NjMgMzMuMjgxMjUgMjkuNDQ1MzEzIEwgMjcuNjc5Njg4IDIzLjg4MjgxMyBMIDcuNSA0My45NDUzMTMgQyA3Ljc0NjA5NCA0NC4wMzkwNjMgOC4wNjY0MDYgNDQuMDAzOTA2IDguNDE3OTY5IDQzLjgwMDc4MSBaICIvPgo8cGF0aCBzdHlsZT0iIGZpbGw6I0ZCQzAyRDsiIGQ9Ik0gNDEuMzk4NDM4IDIzLjA3MDMxMyBDIDQwLjYwMTU2MyAyMi42NDA2MjUgMzMuMjk2ODc1IDE4LjM5NDUzMSAzMy4yOTY4NzUgMTguMzk0NTMxIEwgMzMuMjM4MjgxIDE4LjM1OTM3NSBMIDI3LjY3OTY4OCAyMy44ODI4MTMgTCAzMy4yODEyNSAyOS40NDUzMTMgQyAzNy43MTQ4NDQgMjYuODg2NzE5IDQxLjA0Mjk2OSAyNC45NjQ4NDQgNDEuMzM5ODQ0IDI0Ljc5Mjk2OSBDIDQyLjI4NTE1NiAyNC4yNDYwOTQgNDIuMTk1MzEzIDIzLjUgNDEuMzk4NDM4IDIzLjA3MDMxMyBaICIvPgo8L2c+Cjwvc3ZnPgo="}
                  ];
  public mylinks: Array<{name: string, link: string}> =[
                    {name:"Back to Top", link:"#"},
                    {name:"Download Resume", link:"https://docs.google.com/document/d/113MXj2Hr4lWbFgM0MxR1oPWEg_jPWYu8nqU37IhO2T4/edit?usp=sharing"},
                    {name:"Download CV", link:"https://docs.google.com/document/d/1L_szbFSCBKEmo5lwnbod18iauyczcnRUFhuXXp4h19o/edit?usp=sharing"},
                  ];
  public myExp : Array<{company: string, time: string, details: string}> = 
                  [
                    {
                      company: "Android Intern, PenPencil", time: "July 2018 - 8 Weeks",
                      details:"Worked as Android Application Developer for In-Office internship of 8 Weeks. Worked on 3 Android Projects."
                    },
                    {
                      company: "Software Intern, MyMovieRack.com", time: "July 2017 - 6 Weeks",
                      details:"Worked on two things, First comprised of a Java Servlet built using Jetty and finally deployed on AWS Instance. Second was a chrome Extension employing Bootstrap, Jquery but it was not published."
                    }
                  ];
  public myEdu : Array<{institute: string, degree: string, time: string, details: string}> = 
                  [
                    {
                      institute: "Maharaja Agrasen Institute of Technology, Delhi", degree: "Bachelor of Technology - Computer Science & Engineering ", time : "2016 - 2019",
                      details: "Affialted to Guru Gobind Singh Indraprastha University, Delhi. 74% aggregate."
                    },
                    {
                      institute: "Guru Nanak Dev Institute of Technology, Delhi", degree: "Polytechnic Diploma - Computer Engineering.", time : "2013 - 2016",
                      details: "Passed with Merit (80%), Delhi National Capital Territory, Delhi Government owned college, affiliated to Board of Technical Education, Delhi for Polytechnic Diploma and Degrees."
                    },
                    {
                      institute: "T.N. Public School, Krishan Vihar, Delhi", degree: "Secondary Education, Matriculation (10th Class)", time : "Completed in 2013",
                      details: "Scored 9.8 CGPA, a private school affiliated to Central Board of Secondary Education, India."
                    }
                  ];
  
  public myQua : Array<{name: string, details: string}> = 
                  [
                    {
                      name: "Android Kotlin Developer, Udemy",
                      details: "18 Hours of course by Hussein Al. Rubaye, in June 2018"
                    },
                    {
                      name: "Android O & Java - Mobile App Development | Beginning to End, Udemy",
                      details: "Completed 21 Hours of course by Philipp Muellauer, in Aug 2018"
                    },
                    {
                      name: "Core Java Certification, UC3Mx IT.1 : Edx.org",
                      details: "Scored 71% in June 2017."
                    },
                    {
                      name: "Industrial Training : MileStone Achievers Pvt. Ltd.",
                      details: "Industrial Training in Advance Java in Jan - Feb 2016, as for Diploma requirements."
                    }
                  ];

  public myAwa : Array<{name: string, details: string}> = 
                  [
                    {
                      name: "Associate Member : Techsurge & Mridang 2018",
                      details: "Techsurge & Mridang is the annual fest of MAIT. My role was event head in two events and event coordinator in three events."
                    },
                    {
                      name: "Runner Up : VIPS Hackathon 2017",
                      details: "Team of 3, presented Android Application and finished second in the Hackathon."
                    }
                  ];

  public myExc : Array<{name: string, details: string}> = 
                  [
                    {
                      name: "Event Head, HackMAIT : Techsurge & Mridang 2018",
                      details: "Prizes worth total 25K, Sponsored by Coding Blocks. 7 Teams participated in 6 hour Hackathon."
                    },
                    {
                      name: "Event Head, House of Quizzes: Techsurge & Mridang 2018",
                      details: "Non Technical event based for TV shows."
                    },
                    {
                      name: "Event Coordinator of 3 events : Techsurge & Mridang 2018",
                      details: "Events were: Nostalgia Reloaded, Blur Gaming, LogoQuiz"
                    },
                    {
                      name: "Event Coordinator, Coding Hell : GNDIT Fest 2016",
                      details: "Multiple Choice Questionnaire consisting of Logical, Reasoning and Coding questions."
                    }
                  ];

  public myMem : Array<{name: string, time: string}> =[
                    {name: "Google Play Developer", time: ""},
                    {name: "Beta Testing Groups", time: ""}
                  ];

  public myPro : Array<{name: string, role: string, slogan: string, time: string, details: string, link: String, tech: Array<string>}> = [
                    { name:"PenPencil - Internship", role: "Android Developer", slogan:"In Office Internship with stipend",
                      time: "Aug 2018 - Sept 2018", link: "https://drive.google.com/open?id=1iGH9i8jvS92_jgNQITqTXjQvhDHsA1bu",
                      details:"Worked on two Applications: ABI Champions And an E-Commerce Application",
                      tech :["Java", "Android", "Google Location API", "SQLite", "XML", "UX", "Kotlin", "Android Jetpack"]
                    },
                    {
                      name:"Click-Away", role: "Android Developer", slogan:"Now, Your safekeepers are just a click away",
                      time: "Feb 2017", link: "https://play.google.com/store/apps/details?id=msahil432.click_away",
                      details:"Built with one other friend within 24 hours, during Hackathon event of Delhi Technical University, HackDTU.",
                      tech :["Java", "Android", "Google Location API", "SQLite","NodeJS", "MongoDB", "Javascript", "Heroku", "XML", "UX"]
                    },
                    {
                      name:"MyMovieRack.com", role: "Intern", slogan:"Paid Internship", 
                      time: "July 2017 - August 2017", link : "https://drive.google.com/open?id=0B6HsKe5HQiFyRkpHVjNheG12NEU",
                      details:"Worked on two things, First comprised of a Java Servlet built using Jetty and finally deployed on AWS Instance. Second was a chrome Extension employing Bootstrap, Jquery but it was not published.",
                      tech :["Java", "AWS", "Git", "Jetty", "Tomcat", "Javascript", "JQuery", "YouTube API", "IntelliJ IDEA"]
                    },
                    {
                      name:"ML.Player", role:"Software Engineer", slogan:"The Player which Adapts", 
                      time: "Jan 2016 - March 2017",  link : "#",
                      details:"A Desktop Application written in Java for Music, with Welcome, Reset and Playlist (using XML) capabilities. Developed as a portable application so that all OS are supported. It was submitted as Final Project in Polytechnic Diploma at GNDIT.", 
                      tech :["Java", "Swing", "JDOM", "XML", "UX"]
                    },
                    {
                      name:"CricChat Bot", role : "Software Developer", slogan:"Fastest Scores", 
                      time: "June 2016",  link : "https://m.me/fastestscores",
                      details:"A few Facebook Messenger Bots were created to learn then newly launched platform of facebook. Created using Node.JS with MongoDB and Heroku Hosting.", 
                      tech :["NodeJS", "MongoDB","Heroku"]
                    },
                    {
                      name:"QuizApp", role : "Backend Developer", slogan:"", 
                      time: "Jan 2017",  link : "#",
                      details:"A Web Application created with Meteor.JS for Coding Blocks’ Hackathon at IIT, Delhi in 2016. As the name suggests, it was created for playing quizzes. There were total 3 members in the team, from which I did the backend part.", 
                      tech :["MeteorJS", "MongoDB", "Javascript"]
                    },
                    {
                      name:"Android Messages Organizer", role:"Android Developer", slogan:"SMS made easy",
                      time: "Currently Working",  link : "#",
                      details:"Will be used to categorize SMS into various categories based on content using Machine Learning at Server, along with a Web Interface for accessing SMS online. There are other features too like timed SMS, OTP Copy, etc. Being created with one friend who manages Backend in Node.JS with MongoDB and Heroku Hosting.", 
                      tech :["Android", "Java", "SQLite", "XML", "NodeJS", "HTML", "RestAPI", "ExpressJS", "MongoDB", "Heroku"]
                    },
                    {
                      name:"msahil432.com", role: "Web Engineer", slogan:"Online Profile",
                      time: "Currrently Working",  link : "http://www.msahil432.com",
                      details:"Building as Online CV using Angular along with Express for RestAPI.", 
                      tech :["Angular", "NodeJS", "ExpressJS", "Javascript", "SEO", "HTML", "CSS", "Material Design", "AWS", "Web Hosting"]
                    }
                  ];
}