/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 *  
 */

window.onload = function (){
            genthumbnail('photo');
            genthumbnail('movie');
};

function genthumbnail(type) {

        var txt = "";
        var head_html = '<ul class="category" >';
        var end_html = '</ul>';
        var test = document.getElementById('thumbnail_'+ type);
        var contentsNum = 0;
        var MAX_CONTENTS_PER_LINE = 3;
        var has_comingSoon = false;
        
        httpObj = new XMLHttpRequest();
        httpObj.open("get", "../media/thumbnail.json", true);
        httpObj.onload = function(){
                var myData = JSON.parse(this.responseText);
                for (var i=0; i<myData.length; i++){
                    //指定したデータである場合は処理を実行する。
                    //処理:JSONデータから読み取ったデータを元にサムネイルを追加する。
                    if(myData[i].type === type){
                        
                        //処理:改行した直後、もしくは初期状態で
                        //コンテンツが無い時
                        if(contentsNum % MAX_CONTENTS_PER_LINE === 0){
                            txt += head_html;
                        }
                        
                        txt += '<li style="height: 150px;">';
                        txt += '<a href="'+ myData[i].url +'" target="_blank">';
                        txt += '<img src="'+  myData[i].image +'" alt="集合写真" width="150"/>';
                        txt += '<br />';
                        txt += myData[i].name;
                        txt += '</a>';
                        txt += '</li>';
                        
                        //追加されたコンテンツ数を追加する。
                        contentsNum++;
                        
                        //処理:追加されたサムネイルが３つになった場合は改行する。
                        if(contentsNum % MAX_CONTENTS_PER_LINE === 0){
                            txt += end_html;
                        }
                    };

                }
                
                //処理:最終行のサムネイルが３行に満たなかった時
                while(contentsNum % MAX_CONTENTS_PER_LINE !== 0){
                    txt += '<li style="height: 150px;">';
                    txt += '<img src="comingsoon.jpg" alt="これから追加" width="150"/>';
                    txt += '<br />';
                    txt += 'coming soon';
                    txt += '<br />';
                    txt += 'これから追加！';
                    txt += '</li>';
                    has_comingSoon = true;
                    contentsNum++;
                }
                
                if(has_comingSoon){
                    txt += end_html;
                }
                
                test.insertAdjacentHTML('afterbegin',txt);

            };
       httpObj.send(null);
   }