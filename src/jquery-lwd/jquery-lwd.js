$(document).ready(function () {
    var intWindowCounter = 0;

    $.widget('custom.window', $.ui.dialog, {
        _create: function () {
            //console.log('_create');
            this._super();
            var objThis = this;

            intWindowCounter++;

            this.uiDialogTitlebar.html('');

            var $objTR = $('<tr></tr>');
            var $objTitlebarMiddle = $('<td class="titlebar-middle">'+this.options.title+'</td>');
            var $objTitlebar =  $('<table class="titlebar"></table>');
            var $objTitlebarRight = $('<td class="titlebar-right"></td>');

            // Mminimize-button
            if(this.options.minimizable === true){
                var $objMinimizableButton = $('<button class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only lwd-window-titlebar-button lwd-window-titlebar-minimize" type="button" role="button" title="Minimize"><span class="ui-button-icon-primary ui-icon ui-icon-minimizethick"></span><span class="ui-button-text">Minimize</span></button>');
                $objTitlebarRight.append($objMinimizableButton);
            }

            // Maximize-Button
            if(this.options.maximizable === true){
                var $objMaximizeButton = $('<button class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only lwd-window-titlebar-button lwd-window-titlebar-maximize" type="button" role="button" title="Maximize"><span class="ui-button-icon-primary ui-icon ui-icon-maximizethick"></span><span class="ui-button-text">Maximize</span></button>');
                $objTitlebarRight.append($objMaximizeButton);
            }

            // Close-Button
            if(this.options.maximizable === true){
                var $objCloseButton = $('<button class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only lwd-window-titlebar-button lwd-window-titlebar-close" type="button" role="button" title="Close"><span class="ui-button-icon ui-icon ui-icon-closethick"></span><span class="ui-button-text">Close</span></button>');
                $objTitlebarRight.append($objCloseButton);
            }

            var $objTitlebarLeft = $('<td class="titlebar-left"></td>');

            if(this.options.icon !== '' && this.options.icon !== undefined){
                $objTitlebarLeft.append($('<img src="'+this.options.icon+'" class="lwd-window-icon" />'));
            }

            $objTR.append($objTitlebarLeft);
            $objTR.append($objTitlebarMiddle);
            $objTR.append($objTitlebarRight);
            $objTitlebar.append($objTR);

            this.uiDialogTitlebar.append($objTitlebar);

            /* START - Titlebar-Buttons */
            /*var $objWindowButtonBar = $('<div class="lwd-window-buttonbar"></div>');





            // Close-Button
            if(this.options.closable === false) {
                this.uiDialogTitlebar.find('.ui-dialog-titlebar-close').remove();
                this.options.closeOnEscape = false;
            }else{
                var $objCloseButton = this.uiDialogTitlebar.find('.ui-dialog-titlebar-close');
                $objCloseButton.detach().appendTo($objWindowButtonBar);
                $objCloseButton.removeClass('ui-dialog-titlebar-close');
                $objCloseButton.addClass('lwd-window-titlebar-button');
            }

            this.uiDialogTitlebar.append($objWindowButtonBar);
            */
            /* END - Titlebar-Buttons */

            /* START - Add Icon to titlebar and tasklbar */
            if(this.options.icon !== '' && this.options.icon !== undefined){
                //this.uiDialogTitlebar.prepend($('<img src="'+this.options.icon+'" class="lwd-window-icon" />'));
            }
            /* END - Add Icon to titlebar and tasklbar */

            /* START - Add button to taskbar */
            var $objTaskbar = $('div#taskbar');
            var $objTaskbarButtonContaier = $('div#lwd-taskbar-button-container');
            var $objTaskbarButton;

            if($objTaskbar.is(':visible')){
                if(this.options.icon !== '' && this.options.icon !== undefined){
                    $objTaskbarButton = $('<button type="button" class="ui-button lwd-taskbar-button ui-state-default ui-corner-all lwd-taskbar-windowbutton" data-ariadescribedby="'+this.uiDialog.attr('aria-describedby')+'"><img src="'+this.options.icon+'" class="lwd-taskbar-icon" /><span class="lwd-taskbar-button-title">'+this.options.title+'</span></button>');
                }else{
                    $objTaskbarButton = $('<button type="button" class="ui-button lwd-taskbar-button ui-state-default ui-corner-all lwd-taskbar-windowbutton" data-ariadescribedby="'+this.uiDialog.attr('aria-describedby')+'"><span class="lwd-taskbar-button-title">'+this.options.title+'</span></button>');
                }

                $objTaskbarButtonContaier.append($objTaskbarButton);

                var intMaxWindowbuttonbarWidth = parseInt($objTaskbar.width());
                var intTaskbarLEft = parseInt($('#lwd-taskbar-left').outerWidth());
                var intButtoncont = parseInt($('#lwd-taskbar-button-container').outerWidth());
                var intInfoCont = parseInt($('#lwd-taskbar-information_container').outerWidth());
                var intSum = intMaxWindowbuttonbarWidth - intTaskbarLEft - intInfoCont;
                $objTaskbarButtonContaier.width(intSum-20);

                var intElementWidth = 0;

                $objTaskbarButtonContaier.children().each(function () {
                    intElementWidth += parseInt($(this).width()) + parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'))+ parseInt($(this).css('margin-left'))+ parseInt($(this).css('margin-right'));
                });

                if(intElementWidth > intButtoncont){
                    $('#lwd-taskbar-button-navigation').show();
                }else{
                    $('#lwd-taskbar-button-navigation').hide();
                }
            }
            /* END - Add button to taskbar */

            /* START - Events */
            this.uiDialog.on('windowfocus click', function(){
                objThis.focus();
            });

            this.uiDialog.on('windowdragstart', function(){
                objThis.dragstart();
            });

            this.uiDialog.on('windowdrag', function(){
                objThis.drag();
            });

            this.uiDialog.on('windowdragstop', function(){
                objThis.dragstop();
            });

            this.uiDialog.on('windowresizestart', function(){
                objThis.resizestart();
            });

            this.uiDialog.on('windowresize', function(){
                objThis.resize();
            });

            this.uiDialog.on('windowresizestop', function(){
                objThis.resizestop();
            });

            this.uiDialogTitlebar.find('.lwd-window-titlebar-maximize').on('click', function () {
                if(objThis.options.maximized === true){
                    objThis.restore();
                }else if(objThis.options.maximizable === true){
                    objThis.maximize();
                }
            });

            this.uiDialogTitlebar.on('dblclick', function () {
                if(objThis.options.maximized === true){
                    objThis.restore();
                }else if(objThis.options.maximizable === true){
                    objThis.maximize();
                }
            });

            this.uiDialog.find('.lwd-window-titlebar-minimize').on('click', function () {
                if(objThis.options.minimized === true){
                    objThis.restore();
                }else if(objThis.options.minimizable === true){
                    objThis.minimize();
                }
            });

            this.uiDialogTitlebar.find($('.lwd-window-titlebar-button')).on('click', function(){
                $(this).addClass('ui-state-hover');
            });

            this.uiDialogTitlebar.find('.lwd-window-titlebar-close').on('click', function () {
                objThis.close();
            });
            /* END - Events */
        },

        open: function () {
            //console.log('open');
            this._super();
            var objThis = this;

            /* START - Adjust position if occupied by previously opened window */
                var $objOpenWindows = $('.ui-dialog');
                var intNewPositionTop = parseInt(objThis.uiDialog.position().top);
                var intNewPositionLeft = parseInt(objThis.uiDialog.position().left);

                if(intWindowCounter > 1){
                    $objOpenWindows.each(function () {
                        var intThisWindowCounter = parseInt($(this).attr('data-windowcounter'));

                        if(intThisWindowCounter < intWindowCounter){
                            var intThisPositionTop = parseInt($(this).position().top);
                            var intThisPositionLeft = parseInt($(this).position().left);
                            var $objTitlebar = $(this).find('.ui-dialog-titlebar');
                            var intTitlebarHeight = parseInt($objTitlebar.height()) + parseInt($objTitlebar.css('padding-top'))+ parseInt($objTitlebar.css('padding-bottom'));

                            if(intNewPositionTop === parseInt($(this).position().top) && intNewPositionLeft === intThisPositionLeft){
                                intNewPositionTop = intThisPositionTop+intTitlebarHeight;
                                intNewPositionLeft = intThisPositionLeft+intTitlebarHeight;

                                var intNewBottom = intNewPositionTop + parseInt(objThis.uiDialog.outerHeight());
                                var intNewRight = intNewPositionLeft + parseInt(objThis.uiDialog.outerWidth());
                                var intWindowHeight = parseInt($(window).height()) - parseInt($('div#taskbar').height());
                                var intWindowWidth = parseInt($(window).width());

                                if(intNewBottom > intWindowHeight){
                                    intNewPositionTop = 0;
                                }

                                if(intNewRight > intWindowWidth){
                                    intNewPositionLeft = 0;
                                }
                            }
                        }
                    });



                    if(intNewPositionLeft  !== null && intNewPositionTop !== null){
                        objThis.uiDialog.position({
                            my: 'left+'+intNewPositionLeft+' top+'+intNewPositionTop+'',
                            at: 'left top',
                            of: window
                        });
                    }
                }
            /* END - Adjust position if occupied by previously opened window */

            this.uiDialogTitlebar.find('button').blur(); // fix jQuery-UI focus on close-button
            this.uiDialog.attr('data-windowcounter',intWindowCounter);
        },

        /* START - Methods */
        close: function () {
            //console.log('close');

            var $objTaskbar = $('div#taskbar');

            if($objTaskbar.is(':visible')){
                $objTaskbar.find('button[data-ariadescribedby="'+this.uiDialog.attr('aria-describedby')+'"]').remove();
            }

            var $objTaskbarButtonContaier = $('div#lwd-taskbar-button-container');
            var intMaxWindowbuttonbarWidth = parseInt($objTaskbar.width());
            var intTaskbarLEft = parseInt($('#lwd-taskbar-left').outerWidth());
            var intButtoncont = parseInt($('#lwd-taskbar-button-container').outerWidth());
            var intInfoCont = parseInt($('#lwd-taskbar-information_container').outerWidth());
            var intSum = intMaxWindowbuttonbarWidth - intTaskbarLEft - intInfoCont;
            $objTaskbarButtonContaier.width(intSum-20);

            var intElementWidth = 0;

            $objTaskbarButtonContaier.children().each(function () {
                intElementWidth += parseInt($(this).width()) + parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'))+ parseInt($(this).css('margin-left'))+ parseInt($(this).css('margin-right'));
            });

            if(intElementWidth > intButtoncont){
                $('#lwd-taskbar-button-navigation').show();
            }else{
                $('#lwd-taskbar-button-navigation').hide();
            }

            this.uiDialog.off('click');
            this.focusNextOpenWindow();
            this._super();
        },

        focus: function () {
            //console.log('focus');

            var $objTaskbar = $('div#taskbar');

            if(this.uiDialog.is(':visible')) {
                this.options.positionX = this.uiDialog.position().left;
                this.options.positionY = this.uiDialog.position().top;

                if (this.options.minimized === true && $objTaskbar.is(':visible')) {
                    this.uiDialog.hide();
                    this.focusNextOpenWindow();
                } else {
                    var $intMaxUsedZIndex = 10;

                    $('.ui-dialog').each(function () {
                        var $intUsedZIndex = parseInt($(this).css('z-index'));

                        $intMaxUsedZIndex = ($intMaxUsedZIndex < $intUsedZIndex) ? $intUsedZIndex : $intMaxUsedZIndex;
                        $(this).removeClass('lwd-window-focus');
                    });

                    this.uiDialog.addClass('lwd-window-focus');
                    this.uiDialog.css('z-index', $intMaxUsedZIndex + 1);

                    if ($objTaskbar.is(':visible')) {
                        var $objTaskbarButtonContainer = $('div#lwd-taskbar-button-container');

                        $objTaskbarButtonContainer.find('button').removeClass('ui-state-hover');
                        var $objTaskbarButton = $objTaskbarButtonContainer.find('button[data-ariadescribedby="' + this.uiDialog.attr('aria-describedby') + '"]');
                        $objTaskbarButton.addClass('ui-state-hover');
                        var intButtonOffset = parseInt($objTaskbarButton.offset().top);
                        var intTaskbarHeight = parseInt($objTaskbar.height());
                        var $objFIrstTaskbarButton = $objTaskbarButtonContainer.find('button').first();
                        var intTaskbarOffsetTop = parseInt($objFIrstTaskbarButton.offset().top);
                        var intHeightDiff = (intButtonOffset - intTaskbarOffsetTop);
                        var intPage = Math.floor(intHeightDiff/intTaskbarHeight);
                        $('#lwd-taskbar-button-container').scrollTop(intHeightDiff);
                        $('#lwd-taskbar-nav-down').attr('data-page',intPage);
                        $('#lwd-taskbar-nav-up').attr('data-page',intPage);
                    }
                }
            }
        },

        dragstart: function () {
            //console.log('dragstart');
        },

        drag: function () {
            //console.log('drag');
        },

        dragstop: function () {
            //console.log('dragstop');
        },

        resizestart: function () {
            //console.log('resizestart');
        },

        resize: function () {
            //console.log('resize');
        },

        resizestop: function () {
            //console.log('resizestop');
        },

        maximize: function () {
            //console.log('maximize');

            this.options.restoreHeightMaximized = this.uiDialog.height();
            this.options.restoreWidth = this.uiDialog.width();
            this.options.restorePositionX = this.uiDialog.css('left');
            this.options.restorePositionY = this.uiDialog.css('top');
            this.options.restorePaddingTop = this.uiDialog.css('padding-top');
            this.options.restorePaddingBottom = this.uiDialog.css('padding-bottom');
            this.options.restorePaddingLeft = this.uiDialog.css('padding-left');
            this.options.restorePaddingRight = this.uiDialog.css('padding-right');
            this.options.restoreBorderBottomRightRadius = this.uiDialog.css('border-bottom-right-radius');
            this.options.restoreBorderBottomLeftRadius = this.uiDialog.css('border-bottom-left-radius');
            this.options.restoreBorderBorderTopRightRadius = this.uiDialog.css('border-top-right-radius');
            this.options.restoreBorderBorderTopLeftRadius = this.uiDialog.css('border-top-left-radius');
            this.options.restoreBorderBottomRightRadiusTitlebar = this.uiDialogTitlebar.css('border-bottom-right-radius');
            this.options.restoreBorderBottomLeftRadiusTitlebar = this.uiDialogTitlebar.css('border-bottom-left-radius');
            this.options.restoreBorderBorderTopRightRadiusTitlebar = this.uiDialogTitlebar.css('border-top-right-radius');
            this.options.restoreBorderBorderTopLeftRadiusTitlebar = this.uiDialogTitlebar.css('border-top-left-radius');

            var intPositionX = 0;
            var intPositionY = 0;

            this.uiDialog.css('border-radius',0);
            this.uiDialogTitlebar.css('border-radius',0);
            this.uiDialog.css('padding-top',0);
            this.uiDialog.css('padding-bottom',0);
            this.uiDialog.css('padding-left',0);
            this.uiDialog.css('padding-right',0);
            this.uiDialog.width($(window).width());
            this.uiDialog.height($(window).height());

            this.uiDialog.css('left',intPositionX);
            this.uiDialog.css('top',intPositionY);

            this.uiDialog.draggable({disabled:true});
            this.uiDialog.resizable({disabled:true});

            this.options.width = $(window).width();
            this.options.height = $(window).height();
            this.options.positionX = intPositionX;
            this.options.positionY = intPositionY;
            this.options.resizable = false;
            this.options.draggable = false;
            this.options.maximized = true;

            this.options.restoreBorderLeftWidth = Math.round(parseFloat(this.uiDialog.css('border-left-width')));
            this.options.restoreBorderRightWidth = Math.round(parseFloat(this.uiDialog.css('border-right-width')));
            this.options.restoreBorderTopWidth = Math.round(parseFloat(this.uiDialog.css('border-top-width')));
            this.options.restoreBorderBottomWidth = Math.round(parseFloat(this.uiDialog.css('border-bottom-width')));

            this.uiDialog.css('border-left-width',0);
            this.uiDialog.css('border-right-width',0);
            this.uiDialog.css('border-top-width',0);
            this.uiDialog.css('border-bottom-width',0);

            this.uiDialogTitlebar.find('button.lwd-window-titlebar-maximize>span.ui-icon-maximizethick').removeClass('ui-icon-maximizethick').addClass('ui-icon-restorethick');
            //console.log(this.uiDialogTitlebar.find('button.lwd-window-titlebar-minimize'));
        },

        minimize: function () {
            //console.log('minimize');

            var $objTaskbar = $('div#taskbar');

            if($objTaskbar.is(':visible')){
                this.options.restoreHeight = this.uiDialog.height();
                this.options.restoreWidth = this.uiDialog.width();
                this.options.restorePositionX = this.uiDialog.css('left');
                this.options.restorePositionY = this.uiDialog.css('top');
                $(this.uiDialog).hide();
                this.focusNextOpenWindow();
            }else{
                var $objDialogContent = $(this.uiDialog).find('.ui-dialog-content ');
                $objDialogContent.hide();
                this.options.RestoreHeightMinimized = $objDialogContent.outerHeight();
                this.uiDialogTitlebar.find('button.lwd-window-titlebar-minimize>span.ui-icon-minimizethick').removeClass('ui-icon-minimizethick').addClass('ui-icon-restorethick');
                this.options.Titlebarheight = parseInt($(this.uiDialogTitlebar).outerHeight());
                this.options.height = this.options.Titlebarheight;
                $(this.uiDialog).height(this.options.height);
            }

            this.options.minimized = true;

            this.uiDialogTitlebar.find('button.lwd-window-titlebar-maximize').prop('disabled',true);

        },

        restore: function () {
            //console.log('restore');

            if(this.options.maximized === true){
                this.uiDialog.css('border-left-width',this.options.restoreBorderLeftWidth);
                this.uiDialog.css('border-right-width',this.options.restoreBorderRightWidth);
                this.uiDialog.css('border-top-width',this.options.restoreBorderTopWidth);
                this.uiDialog.css('border-bottom-width',this.options.restoreBorderBottomWidth);

                this.options.restoreBorderLeftWidth = 0;
                this.options.restoreBorderRightWidth = 0;
                this.options.restoreBorderTopWidth = 0;
                this.options.restoreBorderBottomWidth = 0;

                this.uiDialog.css('left',this.options.restorePositionX);
                this.uiDialog.css('top',this.options.restorePositionY);
                this.uiDialog.width(this.options.restoreWidth);
                this.uiDialog.height(this.options.restoreHeightMaximized);
                this.uiDialog.css('border-bottom-right-radius', this.options.restoreBorderBottomRightRadius);
                this.uiDialog.css('border-bottom-left-radius', this.options.restoreBorderBottomLeftRadius);
                this.uiDialog.css('border-top-right-radius', this.options.restoreBorderBorderTopRightRadius);
                this.uiDialog.css('border-top-left-radius', this.options.restoreBorderBorderTopLeftRadius);
                this.uiDialogTitlebar.css('border-bottom-right-radius', this.options.restoreBorderBottomRightRadiusTitlebar);
                this.uiDialogTitlebar.css('border-bottom-left-radius', this.options.restoreBorderBottomLeftRadiusTitlebar);
                this.uiDialogTitlebar.css('border-top-right-radius', this.options.restoreBorderBorderTopRightRadiusTitlebar);
                this.uiDialogTitlebar.css('border-top-left-radius', this.options.restoreBorderBorderTopLeftRadiusTitlebar);
                this.uiDialog.css('padding-top',this.options.restorePaddingTop);
                this.uiDialog.css('padding-bottom',this.options.restorePaddingBottom);
                this.uiDialog.css('padding-left',this.options.restorePaddingLeft);
                this.uiDialog.css('padding-right',this.options.restorePaddingRight);

                this.options.maximized = false;
                this.options.height = this.options.restoreHeightMaximized;
                this.options.width = this.options.restoreWidth;

                this.uiDialogTitlebar.find('button.lwd-window-titlebar-maximize>span.ui-icon-restorethick').removeClass('ui-icon-restorethick').addClass('ui-icon-maximizethick');
                this.uiDialogTitlebar.find('button.lwd-window-titlebar-minimize').prop('disabled',false);
            }

            if(this.options.minimized === true){
                var $objTaskbar = $('div#taskbar');

                if($objTaskbar.is(':visible')){
                    $(this.uiDialog).show();
                }else{
                    var $objDialogContent = $(this.uiDialog).find('.ui-dialog-content ');
                    this.options.height = this.options.RestoreHeightMinimized;
                    this.options.RestoreHeightMinimized = null;
                    $(this.uiDialog).height(this.options.height);
                    $objDialogContent.show();
                }

                this.options.minimized = false;
                this.uiDialogTitlebar.find('button.lwd-window-titlebar-minimize>span.ui-icon-restorethick').removeClass('ui-icon-restorethick').addClass('ui-icon-minimizethick');
                this.uiDialogTitlebar.find('button.lwd-window-titlebar-maximize').prop('disabled',false);
            }

            this.options.resizable = true;
            this.options.draggable = true;

            this.uiDialog.draggable({disabled:false});
            this.uiDialog.resizable({disabled:false});
        },

        focusNextOpenWindow: function () {
            var $objUiDialog = $('.ui-dialog');
            var intThisZIndex = parseInt($(this.uiDialog).css('z-index'));
            var intMaxUsedZIndex = 0;

            $objUiDialog.each(function () {
                if($(this).is(':visible') === true){
                    var intZIndex = parseInt($(this).css('z-index'));
                    intMaxUsedZIndex = (intZIndex > intMaxUsedZIndex && intZIndex < intThisZIndex)? intZIndex: intMaxUsedZIndex;
                }
            });

            $objUiDialog.each(function () {
                if(parseInt($(this).css('z-index')) === intMaxUsedZIndex ){
                    var strAriaDescribedBy = $(this).attr('aria-describedby');
                    var $objWindowToFocusOn = $('#'+strAriaDescribedBy).window('instance');
                    $objWindowToFocusOn.focus();
                }
            });
        }
        /* END - Methods */
    });
    /* END - Window-Widget */

    /* START - Taskbar-Widget */
    $.widget('custom.taskbar', {
        _create: function(){
            var $objTaskbar = $('#taskbar');

            if($objTaskbar.length < 1){
                $objTaskbar = $('<div id="taskbar"></div>');
            }

            $objTaskbar.addClass('ui-widget-header') && $objTaskbar.addClass('ui-corner-all');

            $objTaskbar.append($('<div id="lwd-taskbar-button-navigation"><div id="lwd-taskbar-nav-up" >&nbsp;</div><div id="lwd-taskbar-nav-down" >&nbsp;</div></div>'));

            $objTaskbar.append($('<div id="lwd-taskbar-button-container"></div>'));
            $objTaskbar.append($('<div id="lwd-taskbar-information_container"><div id="lwd-taskbar-clock">00:00</div></div>'));

            $objTaskbar.on('click','button.lwd-taskbar-windowbutton', function(){
                //console.log('click');

                var strAriaDescribedBy = $(this).attr('data-ariadescribedby');
                var $objWindow = $('#'+strAriaDescribedBy).window('instance');

                if($objWindow.options.minimized){
                    $objWindow.restore();
                }

                $objWindow.focus();
            });

            var intPage = 0;

            $objTaskbar.on('click','#lwd-taskbar-nav-down', function () {
                if(!isNaN($(this).attr('data-page'))){
                    intPage = parseInt($(this).attr('data-page'));
                }

                intPage++;
                var intHeight = parseInt($('#lwd-taskbar-button-container').height());
                var intTargetHeight = intPage*intHeight;
                var intScrollHeight = parseInt($('#lwd-taskbar-button-container')[0].scrollHeight);

                if(intTargetHeight >= intScrollHeight){
                    intPage--;
                }

                intTargetHeight = intPage*intHeight;
                $('#lwd-taskbar-nav-down').attr('data-page',intPage);
                $('#lwd-taskbar-nav-up').attr('data-page',intPage);
                $('#lwd-taskbar-button-container').scrollTop(intTargetHeight);
            });

            $objTaskbar.on('click','#lwd-taskbar-nav-up', function () {
                if(!isNaN($(this).attr('data-page'))){
                    intPage = parseInt($(this).attr('data-page'));
                }

                intPage--;
                var intHeight = parseInt($('#lwd-taskbar-button-container').height());
                var intScrollHeight = parseInt($('#lwd-taskbar-button-container')[0].scrollHeight);

                intPage = (intPage >= 0)? intPage: 0;
                var intTargetHeight = intPage*intHeight;
                $('#lwd-taskbar-nav-down').attr('data-page',intPage);
                $('#lwd-taskbar-nav-up').attr('data-page',intPage);
                $('#lwd-taskbar-button-container').scrollTop(intTargetHeight);
            });
        }
    });
    /* END - Taskbar-Widget */

    function clockRefresh() {
        var objDate = new Date();

        var mixHour = objDate.getHours();
        var mixMin = objDate.getMinutes();

        if(mixHour < 10){
            mixHour = '0'+mixHour;
        }

        if(mixMin < 10){
            mixMin = '0'+mixMin;
        }

        $('#lwd-taskbar-clock').html(mixHour+':'+mixMin);
    }

    var intervalID = window.setInterval(clockRefresh, 1000);
});
