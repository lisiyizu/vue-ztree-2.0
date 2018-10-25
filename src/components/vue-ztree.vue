<style>
div.ztree_content_wrap {
    height: 380px;
}
div.ztree_content_wrap div.left {
    float: left;
    width: 100%;
}
div.zTreeDemoBackground {
    width: 100%;
    height: 500px;
    text-align: left;
}

.expendIcon {
    background-position: -74px -36px;
    line-height: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    border: 0 none;
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 4px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-attachment: scroll;
    /* background-image: url("../images/ztree/zTreeStandard.png"); */
}

ul.ztree {
    border: 1px solid #ddd;
    background: #ffffff;
    width: 100%;
    height: auto;
    overflow-y: scroll;
    overflow-x: auto;
}

.ztree * {
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif;
}
.ztree {
    margin: 0;
    padding: 5px;
    color: #333;
}
.ztree li {
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
    line-height: 24px;
    text-align: left;
    white-space: nowrap;
    outline: 0;
}
.ztree li ul {
    margin: 0;
    padding: 0 0 0 18px;
}
.ztree li ul.line {
    background: url("data:image/gif;base64,R0lGODlhCQACAIAAAMzMzP///yH5BAEAAAEALAAAAAAJAAIAAAIEjI9pUAA7")
        0 0 repeat-y;
}

.ztree li a {
    padding: 1px 3px 0 5px;
    margin: 0;
    cursor: pointer;
    height: 17px;
    color: #333;
    background-color: transparent;
    text-decoration: none;
    vertical-align: top;
    display: inline-block;
}
.ztree li a:hover {
    text-decoration: none;
    color: blue;
}
.ztree li a > span.curSelectedNode {
    padding-top: 0px;
    height: 18px;
    opacity: 0.8;
    padding: 3px 5px;
    background: #000;
    color: #fff;
}
.ztree li a.curSelectedNode_Edit {
    padding-top: 0px;
    background-color: #ffe6b0;
    color: black;
    height: 16px;
    border: 1px #ffb951 solid;
    opacity: 0.8;
}
.ztree li a.tmpTargetNode_inner {
    padding-top: 0px;
    background-color: #316ac5;
    color: white;
    height: 16px;
    border: 1px #316ac5 solid;
    opacity: 0.8;
    filter: alpha(opacity=80);
}
.ztree li a.tmpTargetNode_prev {
}
.ztree li a.tmpTargetNode_next {
}
.ztree li a input.rename {
    height: 14px;
    width: 80px;
    padding: 0;
    margin: 0;
    font-size: 12px;
    border: 1px #7ec4cc solid;
    *border: 0px;
}
.ztree li span {
    line-height: 16px;
    margin-right: 2px;
    top: 3px;
    display: inline-block;
}
.ztree li span.button {
    line-height: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    border: 0 none;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAABhCAYAAAByIPvpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQzMDRBN0NBQzlEQzExRTFCQjg3Q0Y5Nzg4MjgyNDE0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMDRBN0M5QzlEQzExRTFCQjg3Q0Y5Nzg4MjgyNDE0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzMgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ1dWlkOkExMDg3RDE4NUU0REUxMTE5MUQ3Q0EwQkRCNzc0OTkxIiBzdFJlZjpkb2N1bWVudElEPSJ1dWlkOjRCQkJBNTIzNDc0REUxMTE5RThFQjAxOTI2M0U4OUNEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vkvd/wAALUpJREFUeNrsXQl8VNXVP7NPMtkXQjYIBCFAhLCGRQXEhQYprYLY4lJbCwWXVquiX9X6Wfopan/VIiK01WLVVqtSZZFFQGQnIGtIAiSEZLKSTLbZZ96875775k3em3kzmUwyEmMOv8u8ee/+70xm/u+8c8/9vzOyjB8/z0IXrerT38syb//fkHDC53WGdnbfqTLYdKAIDp2tgKm5WTBv+mi4fmw2DEyIlvkbJ1Rcv/VdU+J/X72yyLNDLpe7mwIUCiVpClAquUfcN/pnr3v6hopD+/LYeXbJyx/C7HGDoWBiFjz7k8lwqrwRdhUWw4q1m2D9k4vYmyYO9yFlqLh+k7aTD08WPlWTtoS0BaRNde87RNrHpK0nzc53zFt91AOSyTo+7kVbrw04xr9/cNou9T6EY1S/E/h9pN/f8T5Ylu0gcrBkxGNS1lUcknH9xr3wx59dD9NGZ3hw148ZDLPGZ0PBlBHwj62H6fsUkjJUXF82k347a2s6IXlMkzgOdBm3Bvs5LJHJFesyJ86AhCEjABKSuL2GxhmGS6Uzqo7tXc26mKVuQksaIfEShUyxLjcjHwanZkNcYjzd39LUPONybdmMs/ojq+/6YsxSQma/YxASLyGcXheRrQHVkHiQp0XT/a6a9hmOS80zLGW21aTPUkLm9T4eOVgy4mMwJFapVPT5+M8nwunbT4pwGBagR/Umo/D1ZuQNpY/Y7+Bbv2ExXAgV19eJbLlSCEljJkkeay0vBVvLIFYTNzLg5+BiXMsj4xLW5My/j3yhDIC5FXb87inP8Vv+5xVIGH4tlHy2YZ25xaCUK+Rveo9x5+bc5VGamDW3TCRONIYBCxihFpo5kiVqIDvxGsgelAM7jn28btGWa5Ufzj3jM0b132G5IgLWRM1OB0h0gU5WQ/cb2ViISm8FILtVORlg3FW9jvRVpv8CPGPIu0Jib8/K4xCjVKp8SMz1EeMwtsWwwB8Z+f4zxw2DedNG0f5SOLz47Lfsh18W/xI212wBG2uXxPV1czFOYF3SLSIpGVovfggNx55nha398hbh/EatUKk4ElsMAFeqYMdrK+GWjfWetuP/nqDHsA/2dYcgonBCqVCuuXncAjDrWqHZXgsWezscOrqPNtzGfXgM+2Bf4pnVXp5YLVMQEs9IBzbWDC5rG5Q8Ekcba2U6tskx7IN93SFIh0cOlsTSRFbADbtvhMNzDlCckMRCsvOGEzSMbYN5vblTR8J7O0/Awll5Prj9xv3wse0/YFaaYNW5l8But8PikXf74MJln+07yx4+V+n3+JRRg2D+9bmycI/DOO3AMnbpCVCEFpJyx/rsrz95AKIHz6XbdiezbMjkGwhR2wCar2BURslLbeOzAD/+A/d843OULml50+HS0T3LyBPPpMdpdy27dkg+2LTt0G5uIiNw58nfJu+jj39pf5h7LfJPrpXDqLSJcOLSIdEYrA2WRY5UA6uzgqvdKnq/rMXVceKSY3KdHCKGqMFUbPeMoeS9ZjAk9iUyh6Mf+Lbp8M0Pj4lIfO7OIh8cZhlwghbM62E24sE/b5TEvVf1HpgIic1mM1htDnj16Ctwz+h7fXDhMiTfi0sLgCEekXE6wUkI5bDbwOmwkZPKBn/ZUooEDPs4jNMGLqe1S+8dMYJJ1l3xGUMA2hoAHBZxR4dgXDxG+mDfisKv7hKSUE7GGJiQCS3WJrC5rFBaVswdcM8jTxefpI8jskcC62wC7CuvOCwag8TFdylTosBlspAT00U8bkc4GpNghhqI85DaZbcA9pWVGO4SETlYEnsTmcfx5o/EQhySDLMMOEHr7PWOFnOpNSncHYkL4OVzq8BKvuy21hb44+QXJXHhNCH5dFGx0FhfRcnnsFlDHkdI4mDGwb5dJTJiPF5bIZ+gJOGgq6GFuDtnR7yJ3g9f/58PC8jsBGV8GsWIMg5K2QSVRglGcxu4gPF4Yt745yur7wMHOCEuIoViRJ1UMAEi5cTjOt0e3UV3omFI4fHIZkJyclwepeAwwhg5WBLLZN5E5nDoiYXmTWIhDvO9u05UBPV6mw8W0/5SuDkZc+A3wx4FuVEJf8x/Ee4cfackLqxEFpCPXjrd5OOfhzKOkMTBjMMTuStNSGTq5Rx2sFnNYLNwjTfc/vLTj2jDbQfp47JY0WM6vN+Hg/wNNpuFXB0tft8rHrMRz2632jFv5jMG2F3AmrkG5o4wPuUXpo4+ZD9rwz5OjIIcIiIHS2Jhrk+Mk9PshD8SC3G4aLH92EU4WKQP+Hp7TpTBZ/vP0P5SOJ1KR2PiM/efhvvz7odobbQkrjM7fvw4G8yjJIncnjguYQB9npY5DAYPy6VE9Dd+Z+MkpWR2aRwME1inpUtNGFqY7c4is8lE/Z+TXLKxdcS+Fs+Ejx7DLAkJ5SyM67yIxBaGG4MMYiUnyeOl82njjX9upScdGYOeFOIxXCYocrU5yCSVbNtZYOwdcbH3Np4CrNFJvDOcF032QiGxFK4zEqNhSgwXLTDfi3jMMkiR+L3tx3Fxw7NSFyquM5swYYIsmEcpQ4/JhxNIvovnjtNtocfr6ji8Jw52nO6GFnUt5k0tdfq82KgosLU2ATIpmp/P7NoFtzzk9s5kMq2Ni4LWOj3FiHLZDeZNjc11eZpYHbTZW4ijdIkdrZ17fzLiN+M0ydDYWkcxohOyFjYxDdY8WaKcZilEVwwrK9qWRciBabJSjFf6resk7g4OFyt+VjAFHnr9c3h6/Tb4+tQlcslhYO/JcvjtG5vgl6s+hMW3TADvRY1QccF45FDMO5blydfV0MI7nOjKOPxkrytN6JGXf1S6trG4EJjIJACNDhwOB9S+yGU0+OxF7Uvz6DHsg30RI3wPO35XsfZ800mIZuJBDRHkfTso8Zcen0UbbuM+PIZ9sC9ihGNkvQJrLXUOUDjVhJRIZiGRBZwj/7AP9kWMyCN7Lx8Ha6HieFLiogXmezFVhlkGXjOx4u7Zfj1qqLjOPHIoJiTfuZMHPeTDUIFcr0IaR0jiYMYJlH4LhOGtAaDpdJXhBeWRnc+lT54FrEoPjpYG0K+8lSOOOhJUCWSCl5gB+iM7AfsiRjRgMzTVn2t54aRy/3O5adOgSVUDLfZGEvJyDFTLtRCnToJERRqcrN4P2Bcx4ssSNNlPwAtmlfG5iCE6kGlskHBbG7lAkJiYOGjcVmoVoFBqwVxuBOyLGM+Ek1+r/r4aeuRQyNxb8siVhavZKxc2dem9J18zDwZNeljGay3GvVEY9dbcrGemZKesSLgmDzSx8WT+I6M5ZScjA1uLAQwXTsLhsvpVv9pSsfLEQ5OMElqLqOkr05/JnJC4YmjcaNBpYgFUMpqBkDtkYLS1QHlLEVQdb1p14JnqlYR3RgmtRVTZEnhGOw1WaJOUII9Qdiy9kHPPZXGCtZG0g7Aqez2spIt+bv7Krpb67f33/imfXfAjBj3rZlSxFVXA1NFZcJtbxbZr6381i+++R9LV9Kvfes7cRMbPTEfa0JduTH9kVGrsjMx43TA8rm82lRfVtu55anf1X8jTcgyJCZFZCSJ7xpjw5IBHkq+JnhGbHknHaKsxlzecb99z/OUGzxislwf1HqN0ETyizYEZyiygYzgvQ7m1GPaM+BA8YwDVDAmIXPUOmWEyZLbqNJIZYRtx8yRgJ0E7MJhqsXKPTjxuhSGrMj1EDgXHv3FexTZ/QgzcNkYJUwZZ4fAFC2w67YTPzyrohC2Q+q2ruJ72yL19nK4QmTdCaPR/UaQRd0oCWrecA2Ub6P0IgTtVv7mXr/2OQYjXqfqtszEA/KnfgiQjy3jlCEPEIRnf37QN/vpAJtw4nPHgZg6zwcwhVpg7goF/fvg26flzH/VbKLhwxci9eZxgTUhIdjUliMHdgjYv53pVxuCI7CZjpXMsyBUkoI7yXemLOPsgJvG8ptvSOKFwqHTYVBGOV7HxZMRVLWfkCHCQq5CyvQiUrSdgVlYdOTHkkuq3ruL6PXJgm7zupLcnDEqPfHRpXo+O0V1Tcis7nEelZPSnJ0YyuuxeK0IcTkH7Kmk/b/WbNw5jWwwLeDJaEm4EVsYtRTpiJ4AzOhc05Wtg5uBa+OE1WtofxT/euNqoW+CQ8TC8d/G3dLl6TuaDEF/2og+ur3vkntQjK+SydTNyMmFERgIkcVJiaGyGGaV6w4y9JVWrGRcbUI/cQ2OEZNzasTssCKhDdkmkedw4VL9JSTi5JRsxDidoGNsizqlJ95DYc3LINeCMGUtxBcOu0P5SOCSxUP32efnnkrhw5pF7wzioR07IHSfZnBbUIxd3Op6LdS2Pi9Sue+gHY2HU8AQwkq/kjS/0tP37sJ7uw2PYB/sGO0ZpK9dwO5gxuk1kPtYMpLmgZPRaYudxNE20bboPiXGlzxuHWQacoCHOwU1qffOcCVMoLj+1ifaXwqH6rclgAJNA/SaF6+seuSf0yCqFYs19N+SAgQGoagfYvE8P23+S4Wnv79bTY9gH+4KXHtnfGCipwNZKpkhBjNEDHtk9QQuoQ0YyemtF+Imd26TUb944TJVhloG+Xru011Q07qOYI/ookfpNiMNwoq66Dhrqr0BbazM8Nv5xSVxf98j8gohU4/XI3s1Ye6AD77Avm35NGpAgEa5YOOIhedGeK+H64HM8hn2wL2JE78FrDJuTw9gJcbHtO6bvdIye8cjuLENAHTIlpFPskd24QOo3bxzmezFVhjicoMlcNp+TQ3Hla4rbcjFZpH4T4qTUb1K4vu6Ru7tEjXrkIQPioaEdxTyoUBOELRbxNvbBvojxSp2JxuBx+HjkhN5zYgQao0cme3yqLJB2woWXK9bp65EpjlO/jfk0z0c45I3DRYsVaxU0VYZZBpzYYWyLYQF6VCSjzFINX1XEwabyDHhaoH4T4nBit5jg7lr4Xw534iFJXF9d2bMZTrG2xhMQGZ0MbWWXg3rPqugI0CTEiERDcoVygkqthJYmFzhZ8YXaanPBw4cFSSrirdMSlRQj8oZ+xkA8T2J+PH9j9EzWwp3v9aTY+Aka8W4u2txkdHmpkrxwpYOvBfbg7QFxvIqN5nsdcpplUJkug1L/sScMQTK+fy5DUv3WVVy4POnVvkPEXH8EojOSQBmZGvR7bj5/BuRmo48e2U7YZyauuIOE3BoE7tPXcnKGjNREFNST0EMFnJASOh3DTN17RMd7Js8DjdF9j8wvWniRmA8LPGRkGa88cmg4brHi5zQvjKkyzDLkp1pIbBtDwwL0qFIrdKHiwpW3vZp3iGgSMNbdDzGDhgb9OqroaLAaakWhhdNqLiIT5jxUXlrsYvmlhQS7vEf96fZ2iFbLCRmd4LJazotpID0G4hH3wa3Rnuf+xugRIuPycSgWKo4npUfFdqAIHtzu1kzcOpqGBd4e9f33/ukJyXjcJwT3xNcVkJ+dBTe7cbu2/lf2fskR2nHx3feENba9mneIaJPy4ErJexCRFAcyP/VGfIgcqYSmsiaR+s1sqNukb2zJi4qIhSYjibepR+WI12Ro9Wzje4qK1IK+sZViRFcHrzE4i/bcGLBgkw0+npcUcIzuWr/6ze2RO3v0xj29biv77N3XUU/sbSjpfPdwM4YMYR2n/uw7rBwuQlRSYtB/r6FSDy21ehg9/yNOpROZkpr/2o6a+XlZUNLoAIPFQe/02LKwI2SZ90ktJESoICdJBZ+drIAjv7kljTXX13pI5GcMURxNzrVAY3TbI4eqYgsVJ/CsMLvgR9Szfkk86+Eyt2ftUL+hENcl5Vl7Uv32Xb5DJCbjBqg8sgu0UcFrn7EvwwjCU0tDk6Hs9As71crnZg1PB72chQaTA279l54ejiShQJpOBRkxSth5Tg/YFzHiGER6DLM7zMAxBnQ2Rk+EFs8XpApzKUD/ybyaXEZvVXl6Y7mnayCcOg7z3Ygjl842lwiHlpKTzxY8+gbMHpcOs0YPgPtvHgr6OiMUnimGVRu2wksPLWDqS47IvEMLxD25+hOKKyC45b44lscFE1p0J0a+2neIRMRlyxhGx144XNiFV2MhOnmM59mkt07YC3817hXHw29pzPYpK/IyEiAnUUO+QyXgxVoGTjCYrbDlbA25AhxeVbH6V68gRjhiT4zRM5O9IEks8/d1S5A4M3+w+xhAzVG9D4n/9cVeeOKHY2FgvAqsNjs0NlwBnUoBc8emwuRhA+CT3YfhjhunsEIyh4oLV4zcG+4QGVWwrify1yZCrpUVAB/o73/pkdisUTN0KZl02dXUoC9vvVS0p/qdp4Q64HCN0QNEDobEEkzWJGnJSS6jimhHi0NE4vu+vA823LyBHJaJwom5j70Bj88bC4lRMmhubiFfnoPK+PD1sOBKNJld35ybDs++9QlsfPkhDGFk3jhHvAuiUmI6rm51BGdlfXDh8siY38XUmLQp6PFvc5zuGPGO+FkZiVctIWR7stqPDjiQF+2JMbpP5CBJLPPiBZJ48MQsj+etOlYFmZMGeUjcMaPswNAabnnpkBKvhGZDC9iIVxVOOF1kloAtKTkZ5ky4hvQvhYWzJopwzjgWIlIiodaip5oLXK4eOnAYmFkTxLfJRLhweWRcpAgmT/xtjROqiaSUS9mQtMQ9MUaPEDlYEvvcFc1yz+/b/TPYMHuDJIn58XnbRSZoM0cNAIvF6vHEoiHJc7yT12QywZisRNh2mCOkEBeTE09JLFS/PTrsMchJHQWttS0iXDhj5N4wzpqv2tn2hga/x5uKz8Hvfn09xMfHy/jPVxwVBl/b+MOCMz53ZqD1Gj1y0CT2+ng9d1kheXeRMOKmDSISY1hBjwtwheUVcM/sLGgiH36g1J+TkDkjJQrOlNf44NCkar/9bf47Prhwxsi9YRwXw8BTd2Z7rmR8YxgXVDdZ4a/F5LPaWUVCuGaWJ7OUBVPbmPRZSsjcK/XIvkQOQGKZD5PFLJUice3RGnCZOpKKk7KzoLbBBFo5V/fCH5nxWE1TO+Rdk+aDQ5Oq/SaF6+semXVyVzVhjT38RO1OvJWfe/41kw7M5ouUzFLzBu/axp9te090PFIZB/On3UdrG5O+yo9uO+tT2xg1xgm6yDX3zcoBRkUCYge5GrS6Q1C3HvnaIQmwYU/JOoPJrJTLfGssd8fkIiJ3RmKv0ELm/ljQEwvNh8TCyd60HDhV1QRabQQoFL5FXPj3otVqoeiyAWaReNcbZ641wtDEYSL126jM0WCsMfrg+rxHdojDM57EDNlguGU6GFx6APRltVBcXCzliX1qG78/54So/fWmPaLaxu4QRBRO9Ao9crAk9v6EnW1O0JMJHiXzzRv8kliIm5abDV+frYFmKwORkTp3VSJxaBMREQFGpwz2nK6EaWOG++AcNSSGJqTFmPjt+W/DqAyOxLYqiw8uGA/YUyuEV2McxmH3eGLUASOJTcQbGkmLj4uAn94xD26bOQ9YEm60trb6hnB21zKsV8zXNrbZOnLXWNeYb/QY6YN9EeP1HiT1yKhD5jXJ34oeORQS8zimlfHkiTsjMdpX2zcpn33gVjhYegUsMjXExsVR4uJtUhqNBmJjY8mlKQKOlTfDE/fcjP01Ujj2CguNhxugbn8NNBysA7aekcT1eY9stxPPy5EHCYyNV6C1WQGiSYQ1cDRQIksSQFDb2Io12pwdeesjB/bTduLISXoM+9DaxkHqkZG8qEcW6pPDpUfmiBwCiYU4pxHJXE0JHIjE/AlcX3JCOff6cfDW1iI4WWUElyYKBg5MA3lkDJytscBftxfDrEm5cOXiSZ1glhsqrm97ZOJB0eM53DxFElsdXKPHkeQufJQmsrC2sc1K5hvmZs8xPrR456Z99Bj2UUWofGobe/TI5HtHzTE23pDM/HN8xD5qdZj0yN7Lx8FaqDhKygsnFe+vXEIrDX3uVWnoH3fMoZWGJMgYKq7PemSGeEqMh5HMPInR7G7lLHLIyXD39vkzvrYxuaaBQrCS+Pvyn/i4Pfz5BKnaxv40zWi8LjmsemTvH3EM1kLF8bb47nvwNJXhLftSt+2jTkIoMBLoJjrFfRvZhl7zGyJ2G5jdHPUmMe7n92GaTpLEXG3jPPxQrYxY22FymEXPIxSRYHH61jYOpGlGPTJvYdUjf9vqNwFJg6r9JiQzb+FQv3XVestviLjck7NAJMZ9Lqc0kQPVNq691HGCJaUP9Fvb2J8eecGmRkGv6LDqkWlo0dUabh5iBsA14+8/4I2l5CyPtdSJcEjOlJx8Zvqy12jRlXvGK2H1/Ag4WlYBW/dfhKffUsBbT9xpI/0k1W9LX+Fqv91LcG/44r419Vtv+A0Rl8OOP+3hQ2LPJZ/h4mR/oQXWKU74IObZKVG3QCsYwIjfnyBG5u2JM7fT2saHm3ZwtY0FOYfSV5evjcvY8ez8vChoJJEJ6pHn/kcsNeY1zUkaBj4rbqQYeOGOniVyT9d+QxKfi53qWf4bWf0fEQzJ+MGmbbDu55lwQzYDTlsb8Rh2yB/shKmZVpgz3Anvf/QOLL7zfh/1Wyi4cMW2veE3RBjMWrBiEiNxHUzHZM8egMhStY2XH7vZp7bxQOUQ/7WNe4semSfjO9ua3bnceJ9FkkXZ2yRrvzXajbCt0Ez6qAmX4yXVbzJBXQtUsV1HPPFbhIzXETKabAxYZEPAGpEGCksFaG3nYXJ6HZ2GL3/1I9i75hGP+k2Iu6BIBkN8R644zlhDcPt8cMF65K7eIUL/fLcn5i2NUy1SSae/8YMZh7dgxnGY2uGNl97r9IvGH7OJjIyUOmTf89vKV6avZDTWCV/S2sYZGvJ3aAW1jc0tcKzlS7628Svek+leo0fmPWpAzYVE7TckcTEkwuBJiQHVb961335IwoLrCRnNhMTN6vFgMjvAZiQeQDYQtITQ8a1fEFLqYd41TbD/NNZwGyfCXUQSa+LF6rfEYcTrTIXJjh0iXLAe+bv6GyK/fmgWlJWVUZFVINPpBkF2tt8SCSYsvg1Q/cGEJ+s6rW3sb4yrr0d2hwVSntijQ5aq/cYYARSJnarfQHBrDU7sMCZmSFiAnhhJ3NJqJF+EBRPt5AOPAKVyGKhs1XDzUAP8++A5SkghDj2xP/WbXS8T4cJpveE3RNLT02WkdfdPoVpi0koIYZ8EaOi0LrG39Qo9Mh/bBtJcSNV+A4fRI80PqH4T1n4rqqATO4xtMZxAT2w2WcFotNDXw9eOjB8MThL4jU9pgUd3XvbBoflVv3nhwmm94Q6RbjO4B2ob9xo9Mj+xC6i5kKr9RkOGwOq3URfehGgLSipz6H5MsWGWASdoGBNjOCFz65H4E0luukTrYnxTq4Mpowf74ND8qd+8ceGy3nKHyKpVqzB/UCB1jIQSty1YsCDgPKFv1Ud2ZycC6pAlar/JMIHuVr/5k3Dma2tEOMwTY6oMsww4sYsgXhnDCe61SWgRoYIIYwl5YxbYWZ4GBbNH+eBwYser314++iqnfssYDRFNFT64cFkvukOkYMWKFbdJHfj444+xsZ2R2W19oD6yO8UWUHMhUfstzn4FRjbuCKx+k6j9tqlIAQcuOkHjrIM4MrFLkFeRPzoSktV1kGTcAVFMJRyv1sDWS6lwnaD2G4/LbNgHMa2VIvVbZNMlSKvc7IP7vhshMSVzwFx0D9Q2vtr1kUW13zwptkDlr4TxFcHFOZtpnrg4faEonKCeWO2Lw0pAax+/k8V8L+twQX66nk7sHO0sTdMpwQrHazTwcckA+MujC2D3F5/JcWHDB+fYQSd2DiYwrt86yOzHM4u0xKiY48NmlGFePzGD7otRcVriN3acWkO86t+8Jn49MUYPeORu1n6LtdTCqMv/gFHlf+2IiQPgcLFi8Z0/g4c3p8EfdifAN3oWlK4WOF1LYr4DafDYnly4667l0FB6VOGeUXcL9302d3jBb/t8JlL1kcncmTZeU4z7ulofWVgXGbdxXzj1yGGq/ZbTKba+5KgMFy0w34upMswy5JMJ2lwS2z5OwgLiUT2VhrxxX7/5a6q12HigCFbwtd9uGg1PeFUo6vfEC7wnhpu9+4i0xIS8p0sENUhGcRXrserQmJwMaHByWuKvZBWoJX7d3xhoOI6wLjJv/sboNpG/bfXb8GtSYVL+TZ7PAHO9UvlePiwoPPKl6HkHrmfUb33F8IZT/rYxvkaIMMV2+bO1MMOw97bDK/aiV147ZdVWGqd61zYW1jPmDfc9fNjVpfrI3nWRPRfxcNVHJkTp8iWYEFEWKk5IzpSBWazZ3A5Wq4nmTpUqDWi1OoiMjIb6ugrRicJjuoITnDDfCyJL5IXp88rP34LGwm0w5Z5HwSVTwNF3X8XLumfCJdYSR0iO35mWuHM9sptw4ayPnJDUcfZ0VJuX/qmy0uKOn1kIFZcxaOSh9ramKa2tjaDTxUJUdIJr4MB0eV1dtctuM8txf2zcADY6JvGwvrJ4andx3yci84/8HepIYsPxHTDlJw8C01ABdWab1zRHrCUW6of5usb8vq7UR/aui8xbWOsjB0tGuZ86vFI47srGem5VFxqSEaWL8fGpzozMwUp+0pmRMZg+6qsqne3tjUrs1xO47wuR8bNmGMZDYv3m9dBy4kuOxIYaqDYYoKZwLzSb7e97vKVkfWQP7eD2zzlNsZx8n12rjyyui8xbWPXIwZKY/t5eECSWk78an5dfPA3Dc8aLcBgWoOcUkNHHMjIHKfV6cDYbapTYHx1MqLhwEae33CHChw9IYK4wC/dYt/1taDu524fE1S3mTxes37uUXc1hpbTE/O19vKaYr23sT0vcE2P0CJGDJbG3Z6W/v8e6qGNEL+BNYq6PGIexLYYF/sjoIWXGIKXdZqL9pXD4k2RGYzuYTG0kTrZAUnIaJA9I98GFy3rLHSK8N0YCY6kxvJ2/qugFMFg/gkE3zgWmvclD4os2bd0967+4F4Tqs57QEvcWPXKwJJYmsgwa6ipI/DrCh8TCk8QzgyUTNIxtPTnsAKbWRLra2prkUjijsY0c15Ev3A42qxFqaysokb1x4bTecIcIGn5XWFJBrVZTzfEp/Ufwg0UfwBcf/hQsMe3gLLQDDJkIZfWKEwAbRRLKPlUfOVgS+xK5I2TQV5bC0GFjRCQelZvvg8MvCSdowbw5OpGruSiJM5vaiQdykmalFdiFcZgQF1Yi94I7RIxG41erVq0S7RszAKj2Ysx1z8Dp/SuhyTazDknsdDp3+Rmmb9RHDpbE3kRGnHABTYrEKpVahMNUGWYZ+AlaIMN+pL9cCocEthBPjCTGL1yjjZDEhdN6wx0iK1euxPJTOHnT8vvefF7rJN74R7h9qdK26cHXNz5FPDHKKlsk06J9pT5ysCSWyeQ+lzTMTvjzxDyJhTjM92KqLJg3h/2wvxQuKTmVhhM8iVNTsyRx4bSrdYdI8YNjYeSaU/xED+OPOq8hfyx8svz30q9btFsO741WAeOyA97SZ98CdvJ9IuHbycc3mYZ0JriAbxFDBLV2HKDvUsjVBOuA0TdyMXCv0SMHS2LvgoM8DmfNmJ04X/KNJImFOFy0wOwDpsowy+DvjVXrK50mU6syNjZJEofxMB8TB8KF1SNfxTtEkMzuhDFV6MjV2p/bm69kXPuP8heE/c4/cd0b9qb6YkVE5Brhfv5E4M4GIN8XcGS24aKFYrwuJuPflMhG/QInwxxRa7g+UgWLeo0eORQSe+OQzJ2RGA1X3nDRAvO9mCrDLIMUGdvaGpUaTSTtP2jwsJBx4bSrdYeIm7tcxsJuz2Rs5t/Fjxt7r3ZAWsSZ+7MHXvtOGV21u/DE9IPpix4eWfvpujhLbVWUMlK3KuAbYWnTyJXKhfEpi6iXaG54fSE4mZNkfzBn59WtjxwKibuDw5U3XLTAfC+myjDLIFyhQ4+KZMR+rS0N3caFw67mHSK4aKEgn62LsJl1MUvjhuUuTR47CbQpg6Dq8w3LTizOiFZF6G5Nm7MwWRcTCVmLlkDlJ2+/ZKo4H62MjntGOheNV1gZOYFYrUatuiUyNp9+ebjtsNn+QI7ZAhVmv9r1kSmRhcvHXbFQcfzyMa+ZwFQZZhlwgoaxLYYF6FG9yRgqLhx2Ne8QoeWvFAqdDNhHotOzHkifciMoMFS+fBoyb/oRsDbz3TEjxkBc7nhyCSSfT0wSZN35S6ja/unvLJdKFSzretrt2bXkVBhJHuM5v8SaycV0aEziiFS5wkhfC7dttuPzyDHMNkTS8wfYZvKIxZb5/KCkHpnXImOncOuRv/e/fPpdtDtGJsieuS51XpRG+dngO5aAuqYEAKtoEhZCYjqyj9u2mck0zQz0xw5zJgHEpkPREwvtcqU6k8TIDUW7ZGMjYxM3aiIy1Szx/oyznZErdJq4ATOTtDruVyitJiPT0vBVo4sx2RTKaIUMGLBZquzm1qYfj57N0kB7whtHfz0rd8hr2UOSoVYg2XwhB6gENH9chyYnNQKg7NIV2HP20m+OPzT59R71yP323bJPS5rB5GDq1t82FFSYdoxLAtZooLeqQXM9Ia+NC3hZujoEoIsCR60emnZ/AYzZuFMek0BJWngcnFOnyeJTshbFaXQjiKutBtZZj1kyYBxlnKvVDlAMGDQ3RaZMAbksHWymUqgq+VMLYkfP5mN2Xz0yb0I9M1q49Mjyflp8J43dXtZ2esnmSyvKP3oT2g3NIItOANZh59IKZiy44+CUJkjmiDhoPnsSmvZtfVMZGf042UMFEE+9DBd3bjc8enTX6sOG2i2snDUCy1QREhcR79zANbKN+/AY9sG+iEGsh0QS9ZGlaiSHvT5yv333TCGXWbeXtb68/OMzslfb21+6du5CYNqaSYBgxyok7t9tIY9yTPyqoX7fVpCrVBtkKk0JsBzJ6pvA/uiLrn8lx9eU/ebed1fc/8DYW2NSxyhd+AM7DKdVkSmiQa5RgKHyE+c7fzu1/bV3HauuNMNRJyOOb331yABSmuRw6ZH7PfJ30JaMT4a8gTpI0Cqis5OjkrNy81ATTCIKC9WesHa88c7K3Y6BcTIh+MBptxJyMpsJiYUzS5YQ0tZggH2b9jqeP1dUXq5SWMHpNHGLJKThNu7DY9gH+yIGBEu6bj0yvRqg9phvvKE22bPP6SSktoRXj9xv3w2bNTgapmdEp6ZqnC/fPH383UxcPJjqyilpXQ4VgFZHv1gZS2ZeWL+/sRKSJ02HiJETkqv+9ZfdZM8ITBHjWPnjyJMhAL9dAprYZJ3aaCL+XBZPLv8cT+1YxJDsyxqqU6/5o0Hzp/UApZcAjnRUnPWrR/atkRw+PXK/R/4O2gObK/CWhfiZ2Ql3w+T5YLJYwGqoo7oT/N1vmS4OyBSOWzRBOaupBaCqGCJS0oGEDclkL11S+9VigLdfAXjwPlA7Wd3M6MRJA9XaVEK2AdBSe8mJDbdxHx7DPtgXMYj1pGFfXb62sKKRao11ZBppszvAYuVqJOMjNtyHx7AP9qV65H4if7/N5HDBLzZX1P39TOtXbPFBkOviQRYZDwz5OrWZI8HqYIGpuQSyQSNpfAyJqeDSxkPNf9ZaCM2RQGdxnJeeBtCRMDYlCdIGJEcVaCOHaO2meijcu7vu9T+VbcCG27gPj2Ef7IuYl54WvCFej3xOD8PilKSDEtRylkQRDG24jfvwWHjrI/dbt+xq3C3CuNjWZVsuLTO3f7p2ecHkmdr04SQOMIHc2ALlJ464zlQ2nv1pZPQYWe514GxrgobTx6C9suwtmVL5GD9eRZU7UAZQK9VtasvF/7bt2GbY9ea7ze9GKmA/Htv8dc3m5fduvveWOQmzbZY2NQm71fgGWtoAxo7m8L1Gj9xv3bOrdLcIVr258Nuvm35hg29WP1YABZA7i7UWbj73yOaLzx6qtZ60Mjs+vEemmNTYboXG04e2yFWataiP4e32pZ7NCq3Scv+orLIRJ0rhVFk1XLzhWu7AsTPw3z//vfnsV/ubx56rgFKrEyp4UJm44GkvqI/cb922q3S3CJL58v98Xf+A2XHsj78wOuIj2xo/2qu3bKSx9Pbau1ssn73w44nDStRRsS8TF2kWruSWdzh/9I5ni8uhhByl6YbDJR0vgsQur4YK/piU9Qo9cr/1AJGv0t0ihJhIZlzg+LlnX8d6Gaa4/P7C6PLly+kvzjrJa7rv+3O6hV4qpVJJ9cjk2FGgemTWyakd5VS+i/cH8tZ76iP3W7ctmLtFQhmHN+E44dDH8LpyvImVbI9PTk6meuS6uroFZN8RPM736Y3WT+QesmDuFunqOP7uFvFM/t4p8TcMSiSxmhBmKEQlXA/f32ldPg0h7MKJEydSPfIXX3yxkBAZlfO23vz596ffesoj94LfExHYsnc5wi5zk7pTExTS0arV6luysrJk2HAb9/E3T/QTuY9b4LtFQhvH924RSc/LSjQoMQP8YXFgMpN4WEvIiRUkbyTtJvJ8GvHG89LT01MxBsaG27gPj2Ef7IsYxPaHFn3MruLdIsteuycH9F7JLDOZh5W5p1rP3pkDf/iohK9FvNzLC4+IjIz8JCEhQY2TPKvVymiIDR8+PL6piVuvwG0yEXzVRkyr1SrQKxsMBntbWxve4Hqqn8h9yK7m3SIXCd/OBcgPmEik8+T8HHj5M18yV1dXO6OiouJJPByXkpICra2tWCeDXAnswBNZp9Mp8vLyUkg/iI2Nhfr6eti2bVsLYvs9cr/1mJkJUdvN/o9TMSbx0H9elAOPflgiKif75ZdfXiThw6Nms3nptGnT8vE3+5DMxNt64mEkdkxMDBBHDadOnWIPHjx4pLy8fN3evXsv9hO533rMLGQOaDIzfo/r1ApIiwAkMTjMbf8QeWuTyU68679IeFF24cKFFXPmzLl10KBBSkzBYQ05msIgBMaJ3jfffOMkfbcfOHBgFSH+URJu2PuJ3G89Zhk6QuZYccmAdjsDte3cgkVOsgLW7ymB9uryT889O/cheFCUeWAJIW2E0PuKi4stQ4cOvSYjI2M4iZXpIgmfzcDFkvPnz5eTPs+Tvsd6Y/ain8jfYbO2XHn/lR2wWOrYD67NhiiNHP55yEPie/PfLvbROODP/yYlJcHUqVM1ycnJasxUkEkd8JoMvsonHisoKNAcOnQIGhsbMb7uJ3K/9YydeuwGlP08hxGEcD8h7Om8gSp4cWdgEpNJHkyePBknd2qlUjlzyJAhA3FCh8vWpaWl1CWPGDFCiRU+8ZjBYJg5adKkQrVabT969Gg/kfutZ8xNznIpT/3iTlgciMRoN910E6bcsBxtWnR0dAHxulqc6B05cqSusLBwC/Yh3ndufn7+QDwWHx9f0N7ejgUTKxDbT+R++zY8NeqOTf5IjNbS0sLHwWoSB6uJl207e/bsrn379r1LvDLVI5PYeHNlZeW9ubm5s1tbW9VkEsjnnHvV39xfoOV7bAkJCfwmhhbDidcdUVtbe6q5ufni4MHcj9JfvnwZiCcelpqaOvbKlSulZBKIijqasSChRj+R+60XfPm+tfnwCk1jY+Fkz/uYJ+XRi7jTH1p8j02CiIFW65y9+W/5fwEGADY6d71exvGHAAAAAElFTkSuQmCC");
    /* *background-image: url("../images/ztree/zTreeStandard.gif"); */
}

.ztree li span.button.chk {
    width: 13px;
    height: 13px;
    margin: 0 3px 0 0;
    cursor: pointer;
}
.ztree li span.button.chk.checkbox_false_full {
    background-position: 0 0;
}
.ztree li span.button.chk.checkbox_false_full_focus {
    background-position: 0 -14px;
}
.ztree li span.button.chk.checkbox_false_part {
    background-position: 0 -28px;
}
.ztree li span.button.chk.checkbox_false_part_focus {
    background-position: 0 -42px;
}
.ztree li span.button.chk.checkbox_false_disable {
    background-position: 0 -56px;
}
.ztree li span.button.chk.checkbox_true_full {
    background-position: -14px 0;
}
.ztree li span.button.chk.checkbox_true_full_focus {
    background-position: -14px -14px;
}
.ztree li span.button.chk.checkbox_true_part {
    background-position: -14px -28px;
}
.ztree li span.button.chk.checkbox_true_part_focus {
    background-position: -14px -42px;
}
.ztree li span.button.chk.checkbox_true_disable {
    background-position: -14px -56px;
}
.ztree li span.button.chk.radio_false_full {
    background-position: -28px 0;
}
.ztree li span.button.chk.radio_false_full_focus {
    background-position: -28px -14px;
}
.ztree li span.button.chk.radio_false_part {
    background-position: -28px -28px;
}
.ztree li span.button.chk.radio_false_part_focus {
    background-position: -28px -42px;
}
.ztree li span.button.chk.radio_false_disable {
    background-position: -28px -56px;
}
.ztree li span.button.chk.radio_true_full {
    background-position: -42px 0;
}
.ztree li span.button.chk.radio_true_full_focus {
    background-position: -42px -14px;
}
.ztree li span.button.chk.radio_true_part {
    background-position: -42px -28px;
}
.ztree li span.button.chk.radio_true_part_focus {
    background-position: -42px -42px;
}
.ztree li span.button.chk.radio_true_disable {
    background-position: -42px -56px;
}

.ztree li span.button.switch {
    width: 18px;
    height: 18px;
}
.ztree li span.button.root_open {
    background-position: -92px -54px;
}
.ztree li span.button.root_close {
    background-position: -74px -54px;
}
.ztree li span.button.roots_open {
    background-position: -92px 0;
}
.ztree li span.button.roots_close {
    background-position: -74px 0;
}
.ztree li span.button.center_open {
    background-position: -92px -18px;
}
.ztree li span.button.center_close {
    background-position: -74px -18px;
}
.ztree li span.button.bottom_open {
    background-position: -92px -36px;
}
.ztree li span.button.bottom_close {
    background-position: -74px -36px;
}
.ztree li span.button.noline_open {
    background-position: -92px -72px;
}
.ztree li span.button.noline_close {
    background-position: -74px -72px;
}
.ztree li span.button.root_docu {
    background: none;
}
.ztree li span.button.roots_docu {
    background-position: -56px 0;
}
.ztree li span.button.center_docu {
    background-position: -56px -18px;
}
.ztree li span.button.bottom_docu {
    background-position: -56px -36px;
}
.ztree li span.button.noline_docu {
    background: none;
}

.ztree li span.button.ico_open {
    margin-right: 2px;
    background-position: -110px -16px;
    vertical-align: top;
    *vertical-align: middle;
}
.ztree li span.button.ico_close {
    margin-right: 2px;
    background-position: -110px 0;
    vertical-align: top;
    *vertical-align: middle;
}
.ztree li span.button.ico_docu {
    margin-right: 2px;
    background-position: -110px -32px;
    vertical-align: top;
    *vertical-align: middle;
}
.ztree li span.button.add {
    margin: 4px 2px 0 0;
    background-position: -143px 0px;
    vertical-align: top;
    *vertical-align: middle;
}
.ztree li span.button.edit {
    margin-right: 2px;
    background-position: -110px -48px;
    vertical-align: top;
    *vertical-align: middle;
}
.ztree li span.button.remove {
    margin: 4px 2px 0 0;
    background-position: -110px -64px;
    vertical-align: top;
    *vertical-align: middle;
}
.ztree li span.button.up {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVQ4T2NkoBAwUqifgaYGKDAwMKyHutCRgYHhAzbX4nKBAQMDw34GBgYBqCaQZpAhF9ANwWZAAgMDw3wstoEMKWRgYFiALIfNAJBCfhyB+xHJVWAl+ALxP5ohWNWOGoA/EEFxrg8NyIsMDAygtIEBaJqUicpnFLsAAPsjERHQK2WXAAAAAElFTkSuQmCC);
}
.ztree li span.button.down {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4T+2TsQ0CMQxF7ToFsEF6WwI2uFEYgVFuBEZhhBR2nxGOIrWRu4gkCCm6DrfOf3qJHYTJwsk87AcgooSIZzc0s6Sq157t0ICZrQ6ISPfsHwDtGJl5A4DDYD82ETnVveYRieiGiGsH8jKzu6o+vgK8SUQXRHxWEA8vqpo+zYZjjDEeQwgOgVLKknP2qzW13yr/+smmDd6ImjsRbQJ62AAAAABJRU5Erk);
}

.zTreeMask {
    z-index: 10000;
    background-color: #cfcfcf;
    opacity: 0;
    filter: alpha(opacity=0);
    position: absolute;
}

.loadSyncNode {
    width: 16px;
    height: 16px;
    position: relative;
    display: inline-block;
    background-image: url("data:image/gif;base64,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");
}
</style>

<template>
    <!--（ztree－🌲）-->
    <div class="ztree_content_wrap" v-if='treeDataSource.length>0'>
        <div class="zTreeDemoBackground left">
            <ul class="ztree">
                <ztree-item v-for='(m,i) in treeDataSource' :key='i' :model.sync="m" :num.sync='i'
                    root='0' :nodes.sync='treeDataSource.length' :ischeck='isCheck' :callback='func'
                    :expandfunc='expand' :cxtmenufunc='contextmenu' :trees.sync='treeDataSource'></ztree-item>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default{
	data(){
       return {
       	  treeDataSource:[]
       }
	},
	props:{
		// 树数据
        list:{
       	  	type:Array,
       	  	twoWay:true
        },
        // 点击节点回调
		func:{
			type:Function,
			default:null
		},
		// 点击展开回调
		expand:{
            type:Function,
            default:null
		},
		// 右击事件
		contextmenu:{
            type:Function,
            default:function(){
            	console.log("defalt click contextmenu");
            }
		},
		// 是否展开
		isOpen:{
			type:Boolean,
			twoWay:true,
			default:false
		},
		// 是否选中
		isCheck:{
			type:Boolean,
			twoWay:true,
			default:false
		}
	},
	watch:{
        'list': {
            handler:function(){
            	alert("哈哈");
            	this.initTreeData();
            },
            deep:true
        }
	},
	methods:{
        initTreeData(){
            var tempList = JSON.parse(JSON.stringify(this.list));
            
            // 递归操作，增加删除一些属性。比如: 展开/收起
            var recurrenceFunc = (data) => {
                data.forEach((m)=>{
                    if(!m.hasOwnProperty("clickNode")){
	                    m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
	                }

	                if(!m.hasOwnProperty("ckbool") ) {
	                	 m.ckbool = m.hasOwnProperty("ckbool") ? m.ckbool : false;
	                }

	                if(!m.hasOwnProperty("isCheck") ) {
	                	 m.isCheck = m.hasOwnProperty("isCheck") ? m.isCheck : this.isCheck;
	                }

                    m.children = m.children || [];

                    m.hover = false;
            
                    if(	!m.hasOwnProperty("isFolder") ) {
	               		m.isFolder =  m.hasOwnProperty("open") ? m.open : this.isOpen;
	                }

	                if(	!m.hasOwnProperty("isExpand") ) {
	               		m.isExpand =  m.hasOwnProperty("open") ? m.open : this.isOpen;
	               	}

	               	m.loadNode = 0; 
	               	
	               	recurrenceFunc(m.children);
                })
            };

            recurrenceFunc(tempList);

            this.treeDataSource = tempList;
        }
	},
	components:{
		// 组件
        ztreeItem:{
        	name: 'ztreeItem',
        	data(){
                return {
                	parentNodeModel : null
                }
        	},
        	props: {
        		model:{
        			type:Object,
        			twoWay:true
        		},
        		num:{
                    type:Number,
                    twoWay:true
        		},
        		nodes:{
                    type:Number,
                    twoWay:true,
                    default:0
        		},
        		trees:{
		       	  	type:Array,
		       	  	twoWay:true,
		       	  	default:[]
		        },
        		root:{
                    type:String,
                    twoWay:true
        		},
        		callback:{
					type:Function
				},
				expandfunc:{
					type:Function
				},
				cxtmenufunc:{
					type:Function
				},
				ischeck:{
					type:Boolean,
					twoWay:true,
					default:false
				}
        	},
        	methods:{
                Func(m){
                    // 查找点击的子节点
                    var recurFunc = (data,list) => {
                        data.forEach((i)=>{
                            if(i.id==m.id){
                                i.clickNode = true;
                                if(typeof this.callback == "function") {
				                    this.callback.call(null,m,list,this.trees);
				                }
                            }else {
                              i.clickNode = false;
                            }

                            if(i.children){
                               recurFunc(i.children,i);
                            }
                        })
                    }

                    recurFunc(this.trees,this.trees);
                },
                ckFunc(m){
                    m.ckbool = !m.ckbool;
                   
                    // 查找复选框的所有子节点
                    var recurFuncChild = (data) => {
                        data.forEach((i)=>{
                        	i.ckbool = m.ckbool;
                            if(i.children)  recurFuncChild(i.children);
                        })
					}
                    recurFuncChild(m.children);

                    // 查找复选框的所有父节点
                    var parentId = m.parentId;
                    var recurFuncParent = (data,list) => {
	                        data.forEach((i)=>{ 
		                        	if(i.id == parentId && parentId>0) {
										parentId = i.parentId;
										// 判断父亲节点的儿子节点选中个数
										var childrenCks = i.children.filter(child=>{return child.ckbool==true });
										// 如果大于0, 证明不能取消选中状态
										i.ckbool = childrenCks.length>0;
		                        		// 递归查找
		                        		recurFuncParent(this.trees, i);
									}else if(i.id == m.id && i.parentId==0) {
										i.ckbool = m.ckbool;
										isFindRootBool = true;
									}else {
										recurFuncParent(i.children, i);
									}
	                        })
	                    
                    }
                    recurFuncParent(this.trees,this.trees);
                },
                getParentNode(m,cb){
                    // 查找点击的子节点
                    var recurFunc = (data,list) => {
                        data.forEach((i)=>{
                            if(i.id==m.id) this.parentNodeModel = list;
                            if(i.children) {
                            	(typeof cb == "function") && cb.call(i.children);
                            	recurFunc(i.children,i);
                            }
                        })
                    }
                    recurFunc(this.trees,this.trees);
                },
                open(m){
                	//
                	m.isExpand = !m.isExpand;
           
                	if(typeof this.expandfunc == "function" && m.isExpand) {
                		if(m.loadNode!=2) {
		                	//
		                    this.expandfunc.call(null,m);
		                }else {
		                	m.isFolder = !m.isFolder;
		                }
	                } else {
                        m.isFolder = !m.isFolder;
	                }
                },
                enterFunc(m){
                    m.hover = true;
                    this.getParentNode(m,null);
                },
                leaveFunc(m){
                	m.hover = false;
                },
                // 新增节点
			    addNode(nodeModel){
			    	console.log(this);
			        if(nodeModel) {
			          var _nid = +new Date();
			          nodeModel.children.push({
			              id:_nid,
			              parentId:nodeModel.id,
			              name:"动态节点哦～",
			              path:"",
			              clickNode:false,
			              ckbool:false,
			              isCheck:this.ischeck,
			              isFolder:false,
			              isExpand:false,
			              hover:false,
			              loadNode:0,
			              children:[]
			          });
			          nodeModel.isFolder = true;
			          console.log(JSON.parse(JSON.stringify(nodeModel.children)));
			        }else {
			          console.log("请先选中节点");
			        }
			    },
			    // 删除节点
			    delNode(nodeModel){
			        if(nodeModel) {
			           if(this.parentNodeModel.hasOwnProperty("children")) {
			              this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel),1);
			           }else if(this.parentNodeModel instanceof Array){
			              // 第一级根节点处理
			              this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel),1);
			           }
			           nodeModel = null;
			        }else {
			           console.log("请先选中节点");
			        }
			    },
			    upNode(nodeModel){
			       if(!nodeModel) console.log("请先选中节点");

			       if(this.parentNodeModel.hasOwnProperty("children")) {
			          var index = this.parentNodeModel.children.indexOf(nodeModel);
			          if(index-1>=0) {
			            var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel),1);
			            this.parentNodeModel.children.splice(index-1,0,model[0]);
			          }
			       }else if(this.parentNodeModel instanceof Array){
			          // 第一级根节点处理
			          var index = this.parentNodeModel.indexOf(nodeModel);
			          if(index-1>=0) {
			            var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel),1);
			            this.parentNodeModel.splice(index-1,0,model[0]);
			          }
			       }
			    },
			    downNode(nodeModel){
			       if(!nodeModel) console.log("请先选中节点");

			       if(this.parentNodeModel.hasOwnProperty("children")) {
			          var index = this.parentNodeModel.children.indexOf(nodeModel);
			          if(index+1<=this.parentNodeModel.children.length) {
			            var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel),1);
			            this.parentNodeModel.children.splice(index+1,0,model[0]);
			          }
			       }else if(this.parentNodeModel instanceof Array){
			          // 第一级根节点处理
			          var index = this.parentNodeModel.indexOf(nodeModel);
			          if(index+1<=this.parentNodeModel.length) {
			            var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel),1);
			            this.parentNodeModel.splice(index+1,0,model[0]);
			          }
			       }
			    }
        	},
        	computed:{
        		// 给（根 和 子树）赋值不同的样式
                rootClass(){
                	 var strRootClass = '';
                     
                     // 根判断
                	 if(this.root=='0'){
                       this.model.children = this.model.children || [];
                       strRootClass =  (this.num==0 && this.model.children.length==0) ? "roots_docu" : (this.nodes==1) || (this.num==0 && this.nodes!=this.num+1) ? 
                         "root_" : (this.nodes == this.num+1) ? "bottom_" : "center_";
                     
                     // 子树判断
                	 }else if(this.root=='1') {
                        this.model.children = this.model.children || [];
                        strRootClass =  this.nodes>1 && this.model.children.length>0 && this.nodes!=this.num+1
                         ? "center_" : 
                            (this.num == 0 && this.nodes>1) || (this.nodes!=this.num+1) ? "center_docu" : 
                                 this.nodes == 1&&this.num!=0 || (this.nodes==this.num+1 && this.model.children.length>0)   ? "bottom_" : "bottom_docu";
                	 }

                	 return  strRootClass
                },
                // 是否有儿子节点
                isChildren(){
                     return this.num+1 != this.nodes;
                },
                // 展开/收起
                prefixClass(){
                	var returnChar = "";
                	if(this.rootClass.indexOf("docu")==-1){
	                	if(this.model.isFolder){
                           returnChar = "open";
	                	}else {
                           returnChar = 'close'
	                	}
	                }

	                if(this.model.children.length==0 && this.rootClass.indexOf("docu")==-1){
                        returnChar = 'docu'
	                }
	                
	                return returnChar;
                },
                liClassVal(){
                	 return "level"+this.num;
                },
                spanClassVal(){
                	 return "button level"+this.num+" switch "+this.rootClass+this.prefixClass;
                },
                aClassVal(){
                     return this.model.clickNode ? "level"+this.num+' curSelectedNode':"level"+this.num;
                },
                ulClassVal(){
                	return this.isChildren && this.model.children.length>0 ?"level"+this.num+' line':"level"+this.num;
                }
        	},
            template: 
            `<li :class="liClassVal">
				<span :class="spanClassVal" @click='open(model)'></span>
				<a  @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)'  @contextmenu.prevent='cxtmenufunc(model)'>
				    <span :class="{loadSyncNode:model.loadNode==1}" v-if='model.loadNode==1'></span>
				    <span :class='model.iconClass' v-show='model.iconClass' v-else></span>
				    <span v-show='ischeck' id="treeDemo_5_check" class="button chk" :class='{"checkbox_false_full":!model.ckbool,"checkbox_true_full":model.ckbool}' @click='ckFunc(model)' treenode_check=""></span>
					<span class="node_name" :class='aClassVal' @click='Func(model),open(model)' >{{model.name}}</span>
					<!--新增-->
					<span  v-show='model.hover' title='新增' class="button add" @click="addNode(model)"></span>
					<!--删除-->
				    <span v-show='model.hover' title='删除' class="button remove" @click="delNode(model)"></span>
				    <!--上移-->
				    <span v-show='model.hover' title='上移' class="button up" @click="upNode(model)"></span>
				    <!--下移-->
				    <span v-show='model.hover' title='下移' class="button down" @click="downNode(model)"></span>
				</a>
				<ul :class="ulClassVal" v-show='model.isFolder'>
					<ztree-item v-for="(item,i) in model.children" :key='i' :callback='callback' :expandfunc='expandfunc' :cxtmenufunc='cxtmenufunc' :model.sync="item" :num.sync='i' root='1' :nodes.sync='model.children.length' :ischeck='ischeck' :trees.sync='trees'></ztree-item>
				</ul>
			</li>`
		}
	},
	update(){
		this.initTreeData();
	},
	mounted(){
		Vue.nextTick(()=>{
			this.initTreeData();
		})
	}
}
</script>