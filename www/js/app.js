
jQuery
    (
        function ()
        {
            //alert("7/24/2014 4:04pm");

            //MaxHeightInPixels: $(window).height(),

            // command bar
            var CommandBarOverlayPanelViewModel =
                new OverlayPanelViewModel
                (
                    {
                        id: "CommandBarPanel",
                        HeightPercent: "25%",
                        WidthPercent: "100%",
                        EntranceAnimation: "bottom",
                        Opacity: 0.8
                    }
                )

            // polling bar
            var PollingBarOverlayPanelViewModel =
                new OverlayPanelViewModel
                (
                    {
                        id: "PollingBarPanel",
                        HeightPercent: "15%",
                        WidthPercent: "100%",
                        EntranceAnimation: "top",
                        Opacity: 0.8
                    }
                )

            // results
            var resultsOverlayPanelViewModel =
                new OverlayPanelViewModel
                (
                    {
                        id: "ResponseSummaryPanel",
                        HeightPercent: "75%",
                        WidthPercent: "40%",
                        EntranceAnimation: "right",
                        Opacity: 0.8
                    }
                )

            // app should not be creating/managing a widget class's child objects !
            var myBarChartViewModel =
                new BarChartViewModel
                (
                    {
                        TotalDataPointCount: 5,
                        TotalDataPointHeightInPixels: $(window).height(),
                        Foreground: "rgba(255, 216, 0, 0.70)"
                    }
                )

            // keypad panel
            var KeypadOverlayPanelViewModel =
                new OverlayPanelViewModel
                (
                    {
                        id: "KeypadPanel",
                        HeightPercent: "35%",
                        WidthPercent: "100%",
                        EntranceAnimation: "bottom",
                        Opacity: 0.8
                    }
                )

            // app should not be creating/managing a widget class's child objects !
            var myTouchKeypadViewModel =
                new TouchKeypadViewModel
                (
                    {
                        TotalButtonCount: 7,
                        Foreground: "rgba(255, 216, 0, 0.70)"
                    }
                )


            // ========== Main =========

            CreateCommandBar();
            CreatePollingBar();
            CreateResponseSummaryPanel();
            CreateKeypadPanel();

            ShowCommandBar();


            // ========== Event Handlers =========

            // App should not DIRECTLY handle its CHILDREN's low-level events.
            // Instead, each child should DIRECTLY handle its own events (from user or its children) 
            // and trigger approrpriate (custom) event in the corresponding parent.

            jQuery(this)
                .on
                (
                    "event_TouchKeypadViewModel_ParticipantResponse"
                    ,
                    {
                        XXX: 0
                    }
                    ,
                    function (event, parameters) {
                        OnParticipantResponse(parameters.SelectedOrdinal);
                    }
                );

            // This 

            $("#CommandBarPanel")
                .click
                (
                    function () {
                        ShowPollingBar();
                    }
                );

            $("#PollingBarPanel")
                .click
                (
                    function () {
                        HidePollingBar();
                        ShowResponseSummaryPanel();
                    }
                );

            $("#ResponseSummaryPanel")
                .click
                (
                    function () {
                        HideResponseSummaryPanel();
                        HideCommandBar();
                        ShowKeypadPanel();
                    }
                );

            // ========== Methods =========

            function OnParticipantResponse(ResponseOrdinal) {
                //alert("OnParticipantResponse(" + ResponseOrdinal + ")");

                // *** TO DO:  handle reponse
            }


            function CreateCommandBar() {
                CommandBarOverlayPanelViewModel.appendView(jQuery("body"));
            }

            function ShowCommandBar() {
                CommandBarOverlayPanelViewModel.animateView("EntranceAnimation");
            }

            function HideCommandBar() {
                CommandBarOverlayPanelViewModel.animateView("ExitAnimation");
            }


            function CreateResponseSummaryPanel() {
                resultsOverlayPanelViewModel.appendView(jQuery("body"));
                myBarChartViewModel.appendView(jQuery("#" + resultsOverlayPanelViewModel.id));
            }

            function ShowResponseSummaryPanel() {
                resultsOverlayPanelViewModel.animateView("EntranceAnimation");
                myBarChartViewModel.animateView();
            }

            function HideResponseSummaryPanel() {
                resultsOverlayPanelViewModel.animateView("ExitAnimation");
            }


            function CreateKeypadPanel() {
                KeypadOverlayPanelViewModel.appendView(jQuery("body"));
                myTouchKeypadViewModel.appendView(jQuery("#" + KeypadOverlayPanelViewModel.id));
            }

            function ShowKeypadPanel() {
                KeypadOverlayPanelViewModel.animateView("EntranceAnimation");
                //myTouchKeypadViewModel.animateView();
            }

            function HideKeypadPanel() {
                KeypadOverlayPanelViewModel.animateView("ExitAnimation");
            }


            function CreatePollingBar() {
                PollingBarOverlayPanelViewModel.appendView(jQuery("body"));
                jQuery("#PollingBarPanel").append("<center><div class='PanelTextClass>Hi Mom!</div></center>");
            }

            function ShowPollingBar() {
                PollingBarOverlayPanelViewModel.animateView("EntranceAnimation");
            }

            function HidePollingBar() {
                PollingBarOverlayPanelViewModel.animateView("ExitAnimation");
            }
        }
    );