"@fixture Test cafe example page";
"@page https://devexpress.github.io/testcafe/example/";

"@test"["Example"] = {
    '1.Type in input "name"': function() {
        act.type("#developer-name", "Hello");
    },
    "2.Assert": function() {
        eq($("#developer-name").length > 0, true);
    },
    '3.Click label "Support for..."': function() {
        act.click(":containsExcludeChildren(Support for testing on remote devices)");
    },
    "4.Assert": function() {
        eq($("#remote-testing")[0].checked, true);
    },
    '5.Click submit button "Submit"': function() {
        act.click("#submit-button");
    },
    "6.Assert": function() {
        eq($("#article-header").text(), "Thank you, Hello!");
    }
};

"@test"["Example 2"] = {
    '1.Click radio button "Windows"': function() {
        act.click("#windows");
    },
    '2.Click label "Re-using existing..."': function() {
        act.click(":containsExcludeChildren(Reusing existing JavaScript code for testing)");
    },
    '3.Click label "Running tests in..."': function() {
        act.click(":containsExcludeChildren(Running tests in background andor in parallel in multiple browsers)");
    },
    '4.Click select "preferred-interface"': function() {
        act.click("#preferred-interface");
    },
    '5.Click option "JavaScript API"': function() {
        act.click(":containsExcludeChildren(JavaScript API)");
    },
    "6.Assert": function() {
        eq($("#preferred-interface").val(), "JavaScript API1", "Preferred interface is not Java Script API");
        eq($(":containsExcludeChildren(Running tests in background andor in parallel in multiple browsers)").is(":visible"), true);
        eq($(":containsExcludeChildren(I have tried TestCafe)").length > 0, true);
    },
    '7.Click select "preferred-interface"': function() {
        act.click("#preferred-interface");
    },
    "8.Click paragraph": function() {
        var actionTarget = function() {
            return $(".column.col-1").find(" > fieldset:nth(1) > p:nth(4)");
        };
        act.click(actionTarget);
    },
    "9.Assert": function() {
        eq($("#submit-button").is(":visible"), true);
    },
    "10.Click fieldset": function() {
        act.click("#tried-section");
    },
    '11.Click label "I have tried..."': function() {
        act.click(":containsExcludeChildren(I have tried TestCafe)");
    },
    "12.Click div": function() {
        act.click(".slider-container");
    },
    "13.Click div": function() {
        act.click("#slider");
    },
    "14.Click span": function() {
        act.click(".ui-slider-handle.ui-corner-all.ui-state-default.ui-state-active.ui-state-focus");
    },
    '15.Type in input "name"': function() {
        act.type("#developer-name", "Mac");
    },
    "16.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '17.Click input "name"': function() {
        act.click("#developer-name");
    },
    '18.Click submit button "Submit"': function() {
        act.click("#submit-button");
    }
};

