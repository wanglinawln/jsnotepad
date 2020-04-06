/* exported $menubar*/
/* global $dlgFont,$editor: true */
/* eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
// custom console

var $menubar=(function(){
    var $bar = $('<div class="notepad-menubar"></div>');
    var menuData = [
        { 
            title: '文件(F)',
            menuItems: [
                {
                    title: '新建(N)',
                    shortcut: 'Ctrl+N',
                    enabled: true,
                    handler: function() { console.log('新建(N) menu clicked!'); }
                },
                {
                    title: '新窗口(W)',
                    shortcut: 'Ctrl+Shift+N',
                    enabled: true,
                    handler: function() { console.log('新窗口(W) menu clicked!'); }
                },
                {
                    title: '打开(O)...',
                    shortcut: 'Ctrl+O',
                    enabled: true,
                    handler: function() { console.log('打开(O) menu clicked!'); }
                },
                {
                    title: '保存(S)',
                    shortcut: 'Ctrl+S',
                    enabled: true,
                    handler: function() { console.log('保存(S) menu clicked!'); }
                },
                {
                    title: '另存为(A)...',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('另存为(A) menu clicked!'); }
                },
                {
                    title: 'hr',
                    shortcut: '',
                    enabled: true,
                    handler: null
                },
                {
                    title: '页面设置(U)...',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('页面设置(U) menu clicked!'); }
                },
                {
                    title: '打印(P)...',
                    shortcut: 'Ctrl+P',
                    enabled: true,
                    handler: function() { console.log('打印(P) menu clicked!'); }
                },
                {
                    title: 'hr',
                    shortcut: '',
                    enabled: true,
                    handler: null
                },
                {
                    title: '退出(X)',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('退出(X) menu clicked!'); }
                }
            ],
            width: '202px',
            left: '0px'
        },
        { 
            title: '编辑(E)',
            menuItems: [  
                {
                    title: '撤销(U)',
                    shortcut: 'Ctrl+Z',
                    enabled: false,
                    handler: function() { console.log('撤销(U) menu clicked!'); }
                },
                {
                    title: 'hr',
                    shortcut: '',
                    enabled: true,
                    handler: null
                },
                {
                    title: '剪切(T)',
                    shortcut: 'Ctrl+X',
                    enabled: false,
                    handler: function() { console.log('剪切(X) menu clicked!'); }
                },
                {
                    title: '复制(C)',
                    shortcut: 'Ctrl+C',
                    enabled: false,
                    handler: function() { console.log('复制(C) menu clicked!'); }
                },
                {
                    title: '粘贴(P)',
                    shortcut: 'Ctrl+V',
                    enabled: true,
                    handler: function() { console.log('粘贴(P) menu clicked!'); }
                },
                {
                    title: '删除(L)',
                    shortcut: 'Del',
                    enabled: false,
                    handler: function() { console.log('删除(L) menu clicked!'); }
                },
                {
                    title: 'hr',
                    shortcut: '',
                    enabled: true,
                    handler: null
                },  
                {
                    title: '使用 Bing 搜索...',
                    shortcut: 'Ctrl+E',
                    enabled: true,
                    handler: function() { console.log('使用 Bing 搜索 menu clicked!'); }
                },
                {
                    title: '查找(F)...',
                    shortcut: 'Ctrl+F',
                    enabled: false,
                    handler: function() { console.log('查找(F) menu clicked!'); }

                },
                {
                    title: '查找下一个(N)',
                    shortcut: 'F3',
                    enabled: false,
                    handler: function() { console.log('查找下一个(N) menu clicked!'); }
                },
                {
                    title: '替换(R)...',
                    shortcut: 'Ctrl+H',
                    enabled: true,
                    handler: function() { console.log('替换(R) menu clicked!'); }

                },
                {
                    title: '转到(G)...',
                    shortcut: 'Ctrl+G',
                    enabled: true,
                    handler: function() { console.log('转到(G) menu clicked!'); }

                },
                {
                    title: 'hr',
                    shortcut: '',
                    enabled: true,
                    handler: null   
                },
                {
                    title: '全选(A)',
                    shortcut: 'Ctrl+A',
                    enabled: true,
                    handler: function() { console.log('全选(A) menu clicked!'); }

                },
                {
                    title: '时间/日期(D)',
                    shortcut: 'F5',
                    enabled: true,
                    handler: function() { console.log('时间/日期(D) menu clicked!'); }

                },
            ],
            width: '218px',
            left: '52px'
        },
        { 
            title: '格式(O)',
            menuItems: [
                {
                    title: '自动换行(W)',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('自动换行(W) menu clicked!'); }
                },
                {
                    title: '字体(F)...',
                    shortcut: '',
                    enabled: true,
                    handler: function() {
                        $dlgFont.show({
                            family: 'Arial',
                            style: '常规',
                            size: '16',
                            okHandler: function(e) {
                                $editor.setFont(e);
                            }
                        });
                    }
                }
            ],
            width: '156px',
            left: '106px'
        },
        { 
            title: '查看(V)',
            menuItems: [
                {
                    title: '缩放(Z)',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('缩放(Z) menu clicked!'); }
                },
                {
                    title: '状态栏(S)',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('状态栏(S) menu clicked!'); }
                }
            ],
            width: '138px',
            left: '162px'
        },
        { 
            title: '帮助(H)',
            menuItems: [
                {
                    title: '查看帮助(H)',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('查看帮助(H) menu clicked!'); }

                },
                {
                    title: '发送反馈(F)',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('发送反馈(F) menu clicked!'); }

                },
                {
                    title: 'hr',
                    shortcut: '',
                    enabled: true,
                    handler: null   
                },
                {
                    title: '关于记事本(A)',
                    shortcut: '',
                    enabled: true,
                    handler: function() { console.log('关于记事本(A) menu clicked!'); }

                },
            ],
            width: '166px',
            left: '216px'
        }
    ];
    var menus = [];
    var active = -1;

    function createMenus() {
        for(var i=0; i<menuData.length; i++) {
            var $menus = $('<ul class="menus"></ul>'),
                items = menuData[i].menuItems;
    
            for(var j=0; j<items.length; j++) {
                if(items[j].title === 'hr') {
                    var $hr = $('<li class="menu-hr"></li>');
                    $menus.append($hr);
                    continue;
                }
                var $menu = $('<li class="menu-item"></li>');
        
                $menu.html(items[j].title);
                $menu.attr('data-x', i);
                $menu.attr('data-y', j);
        
                if(items[j].shortcut !== '') {
                    var $shorcut = $('<span class="shortcut"></span>');
            
                    $shorcut.html(items[j].shortcut);
                    $menu.append($shorcut);
                }
        
                if(!items[j].enabled) {
                    $menu.addClass('disabled');
                }
        
                $menus.append($menu);
        
                $menu.click(function() {
                    if($(this).hasClass('disabled')) return;
                    var i = this.dataset.x, 
                        j = this.dataset.y;
                    menuData[i].menuItems[j].handler();
                    menus[i].css({display: 'none'});
                    active = -1;
                });
            }
        
            $menus.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });
    
            $bar.append($menus);
            menus.push($menus); 
        }   
    }

    function createMenuTitle() {
        var $titles = $('<ul class="menu-title"></ul>');
    
        for(var i=0; i<menuData.length; i++) {
            var $title = $('<li class="title"></li>');
        
            $title.html(menuData[i].title);
            $title.attr('data-id', i);
            $titles.append($title);
        
            $title.click(function() {
                var i = Number(this.dataset.id);
        
                if(active === -1) {
                    menus[i].css({ display: 'inline-block' });
                    active = i;
                } 
                else if(active !== i) {
                    menus[active].css({ display: 'none' });
                    menus[i].css({ display: 'inline-block' });
                    active = i;
                } 
                else {
                    menus[active].css({ display: 'none' });
                    active = -1;
                }
            });
    
            $title.hover(function() {
                if(active !== -1) {
                    var i = Number(this.dataset.id);
                    menus[active].css({ display: 'none' });
                    menus[i].css({ display: 'inline-block' });
                    active = i;
                }
            });
        }
        $bar.append($titles);
    }


    function hideMenu() {
        if(active === -1) return;
    
        menus[active].css({display: 'none'});
        active = -1;
    }

    function show(){
        createMenuTitle();
        createMenus();
        $('body').append($bar);
    }
    
    return{
        show:show,
        hideMenu:hideMenu,
    };
}());