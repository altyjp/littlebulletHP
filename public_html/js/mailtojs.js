/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function makeMail(){
    
        var formData = document.forms.mailForm;
        
        var body = "";
        
        body += '%0D%0A';
        
        body += "invateCode " + '%0D%0A';
        body += formData.invateCode.value;
        
        body += '%0D%0A';
        
        body += "handleName " + '%0D%0A';
        body += formData.handleName.value;
        
        body += '%0D%0A';
        
        body += "mainWepon "  + '%0D%0A';
        body += formData.mainWepon.value;
        
        body += '%0D%0A';
        
        body += "subWepon "  + '%0D%0A';
        body += formData.subWepon.value;
        
        body += '%0D%0A';
        
        body += "comment " + '%0D%0A';
        body += formData.comment.value;
        
        body += '%0D%0A';
        
        body += "----------END----------";
        
        location.href = "mailto:littlebulletmember@gmail.com\
                                            ?subject=LBMS更新&body="+body;
    }

function onHandleNameSelect(){
    }