/*
    This file is part of d-comments_For_DMM-TV.

    d-comments_For_DMM-TV is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    d-comments_For_DMM-TV is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with d-comments_For_DMM-TV.  If not, see <https://www.gnu.org/licenses/>.
*/

/**
 * 視聴ページで追加する要素のスタイル
 */
const style = document.createElement("style");
style.id = "d-comments-style";
style.innerHTML = `
            #d-comments-container {
              height: 100vh;
              position:relative;
              z-index:1;
              width:300px;
              display:flex;
              flex-direction:column;
              overflow:hidden;
              overflow-y:scroll;
              font-family:BIZ_UDPGothic;
              font-size:medium;
              font-weight:500;
              font-style:normal;
              color:white;
            }
            #d-comments-container::-webkit-scrollbar {
              display:none;
            }
            #d-comments-container #d-comments-status {
              text-align:center;
              padding:4px;
            }
            #d-comments-container #d-comments-error {
              width:90%;
              margin:1em auto;
              z-index:-1;
            }
            #d-comments-container #d-comments-close {
              width:80%;
              height:2em;
              margin:0 auto;
              padding:3px;
              border-radius:15px;
              cursor:pointer;
            }
            #d-comments-container ul {
              border-top:0.1px solid #484848;
              margin-block-start:0px;
              margin-block-end:0px;
              padding-inline-start:0px;
              z-index:1;
              list-style:none;
              overflow:hidden;
              overflow-y:scroll;
            }
            #d-comments-container ul::-webkit-scrollbar {
              display:none;
            }
            #d-comments-container ul li {
              font-size:16px;
              line-height:1.4;
              padding:5px;
              border-bottom:1px solid #484848d1;
            }
            @font-face {
              font-family:"BIZ_UDPGothic";
              src: url(${chrome.runtime.getURL(
                "fonts/BIZ_UDPGothic.ttf"
              )}) format("truetype")
              font-weight: normal;
              font-style: normal;
            }
            @font-face {
              font-family:"BIZ_UDPGothic";
              src: url(${chrome.runtime.getURL(
                "fonts/BIZ_UDPGothic-Bold.ttf"
              )}) format("truetype")
              font-weight: bold, bolder;
              font-style: normal;
            }
            `;
export default style;
