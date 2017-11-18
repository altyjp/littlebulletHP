/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//読み込み時の表示
window_load();

//ウィンドウサイズ変更時に更新
window.onresize = window_load;

//スマホモード
var $display_mode;

//サイズの表示
//スマホ・PCモードの切り替え時の処理
function window_load() {
        var $display_size;
	$display_size = window.innerWidth;
        //初回時
        if($display_mode === undefined){
            if($display_size > 768){
                $display_mode = "PC";
            } else {
                $display_mode = "SP";
            }
            return;
        //2回目以降 SPモードからPCモードになった場合、画面を強制リフレッシュ
        } else {
            if ($display_mode === "SP"){
                if($display_size > 768){
                    location.reload();
                }
        // そうでない場合は現在の状態を観測する
            } else {
                if($display_size > 768){
                    $display_mode = "PC";
                } else {
                    $display_mode = "SP";
                }
            }
        }
}

/* スマホ用ボタン表示時のイベント */
function menu_btn(){
    
    var $display = document.getElementById("nav").style.display;
    
    if($display === "none" || $display === ""){
        //表示処理
        document.getElementById("nav").style.display = "block";
        document.getElementById("headerMenu").style.height = "400px";
    } else {
        //非表示処理
        document.getElementById("nav").style.display = "none";
        document.getElementById("headerMenu").style.height = "25px";
    }
}