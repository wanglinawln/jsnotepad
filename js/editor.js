/* exported $editor */
/* global $menubar: true */
/*eslint linebreak-style: ["error", "unix"]*/

var $editor = (function() {
    var $DOM = $(''
        + '<div class="notepad-editor">'
            + '<textarea spellcheck="false" auto-size="none"></textarea>'
        + '</div>');
    var $textArea = $DOM.find('textarea');
    function setFont(e) {
        $textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
    
        if(e.style === '斜体') {
            $textArea.css({'font-style': 'italic'});
            return;
        }
    
        if(e.style === '粗体') {
            $textArea.css({'font-weight': 'bold'});
            return;
        }
    
        if(e.style === '粗偏斜体') {
            $textArea.css({'font-weight': 'bold', 'font-style': 'italic'});
            return;   
        }
    }
    
    function show() {  
        $('body').append($DOM);
        $textArea.trigger('focus');
        $textArea.click($menubar.hideMenu);
    }
    return{
        show:show,
        setFont: setFont,
    };
}());