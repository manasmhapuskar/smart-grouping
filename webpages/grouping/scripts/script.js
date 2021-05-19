var currentConstraint = 1; //Current constraint to be added or removed/shown or hidden

//Setting initial visibilities
function hideDropdowns() { 

    document.getElementById("mustHaveDropdown2").style.display = "none";
    document.getElementById("studentSkillsDropdown2").style.display = "none";
    document.getElementById("changingDropdown3").style.display = "none";
    document.getElementById("andOrDropdown2").style.display = "none";
    document.getElementById("changingDropdown4").style.display = "none";
    document.getElementById("constraintText2").style.display = "none";

    document.getElementById("mustHaveDropdown3").style.display = "none";
    document.getElementById("studentSkillsDropdown3").style.display = "none";
    document.getElementById("changingDropdown5").style.display = "none";
    document.getElementById("andOrDropdown3").style.display = "none";
    document.getElementById("changingDropdown6").style.display = "none";
    document.getElementById("constraintText3").style.display = "none";

    document.getElementById("mustHaveDropdown4").style.display = "none";
    document.getElementById("studentSkillsDropdown4").style.display = "none";
    document.getElementById("changingDropdown7").style.display = "none";
    document.getElementById("andOrDropdown4").style.display = "none";
    document.getElementById("changingDropdown8").style.display = "none";
    document.getElementById("constraintText4").style.display = "none";

    document.getElementById("mustHaveDropdown5").style.display = "none";
    document.getElementById("studentSkillsDropdown5").style.display = "none";
    document.getElementById("changingDropdown9").style.display = "none";
    document.getElementById("andOrDropdown5").style.display = "none";
    document.getElementById("changingDropdown10").style.display = "none";
    document.getElementById("constraintText5").style.display = "none";

    document.getElementById("groupSize").value = "3";  

}

function changeDropdown(number) {
    //Creating options here. Can't be reused in one method for some reason, so two sets per constraint

    //Students
    var optionJuliusSherman=document.createElement("option");
    optionJuliusSherman.text="Julius Sherman";

    var optionJuliusSherman2=document.createElement("option");
    optionJuliusSherman2.text="Julius Sherman";

    var optionTomGreen=document.createElement("option");
    optionTomGreen.text="Tom Green";

    var optionTomGreen2=document.createElement("option");
    optionTomGreen2.text="Tom Green";

    var optionMaxRead=document.createElement("option");
    optionMaxRead.text="Max Read";

    var optionMaxRead2=document.createElement("option");
    optionMaxRead2.text="Max Read";

    var optionDavidHopes=document.createElement("option");
    optionDavidHopes.text="David Hopes";

    var optionDavidHopes2=document.createElement("option");
    optionDavidHopes2.text="David Hopes";

    var optionJackieYun=document.createElement("option");
    optionJackieYun.text="Jackie Yun";

    var optionJackieYun2=document.createElement("option");
    optionJackieYun2.text="Jackie Yun";

    //Skills
    var optionJava=document.createElement("option");
    optionJava.text="Java";

    var optionJava2=document.createElement("option");
    optionJava2.text="Java";

    var optionCSS=document.createElement("option");
    optionCSS.text="CSS";

    var optionCSS2=document.createElement("option");
    optionCSS2.text="CSS";

    var optionGraphicDesign=document.createElement("option");
    optionGraphicDesign.text="Graphic Design";

    var optionGraphicDesign2=document.createElement("option");
    optionGraphicDesign2.text="Graphic Design";

    var optionCPP=document.createElement("option");
    optionCPP.text="C++";

    var optionCPP2=document.createElement("option");
    optionCPP2.text="C++";

    var optionJavascript=document.createElement("option");
    optionJavascript.text="Javascript";

    var optionJavascript2=document.createElement("option");
    optionJavascript2.text="Javascript";


    if(number == 1) {

        changingDropdown1.remove(4);
        changingDropdown1.remove(3);
        changingDropdown1.remove(2);
        changingDropdown1.remove(1);
        changingDropdown1.remove(0);
        changingDropdown2.remove(4);
        changingDropdown2.remove(3);
        changingDropdown2.remove(2);
        changingDropdown2.remove(1);
        changingDropdown2.remove(0);
        var mainMenu = document.getElementById('studentSkillsDropdown1');

        if (mainMenu.value == "student") { 

            changingDropdown1.add(optionJuliusSherman,changingDropdown1.options[null]);
            changingDropdown1.add(optionTomGreen,changingDropdown1.options[null]);
            changingDropdown1.add(optionMaxRead,changingDropdown1.options[null]);
            changingDropdown1.add(optionDavidHopes,changingDropdown1.options[null]);
            changingDropdown1.add(optionJackieYun,changingDropdown1.options[null]);
            changingDropdown2.add(optionJuliusSherman2,changingDropdown2.options[null]);
            changingDropdown2.add(optionTomGreen2,changingDropdown2.options[null]);
            changingDropdown2.add(optionMaxRead2,changingDropdown2.options[null]);
            changingDropdown2.add(optionDavidHopes2,changingDropdown2.options[null]);
            changingDropdown2.add(optionJackieYun2,changingDropdown2.options[null]);

        } 

        else if (mainMenu.value == "skill") { 

            changingDropdown1.add(optionJava,changingDropdown1.options[null]);
            changingDropdown1.add(optionCSS,changingDropdown1.options[null]);
            changingDropdown1.add(optionGraphicDesign,changingDropdown1.options[null]);
            changingDropdown1.add(optionCPP,changingDropdown1.options[null]);
            changingDropdown1.add(optionJavascript,changingDropdown1.options[null]);
            changingDropdown2.add(optionJava2,changingDropdown2.options[null]);
            changingDropdown2.add(optionCSS2,changingDropdown2.options[null]);
            changingDropdown2.add(optionGraphicDesign2,changingDropdown2.options[null]);
            changingDropdown2.add(optionCPP2,changingDropdown2.options[null]);
            changingDropdown2.add(optionJavascript2,changingDropdown2.options[null]);

        }

    }

    else if(number == 2) { 

        changingDropdown3.remove(4);
        changingDropdown3.remove(3);
        changingDropdown3.remove(2);
        changingDropdown3.remove(1);
        changingDropdown3.remove(0);
        changingDropdown4.remove(4);
        changingDropdown4.remove(3);
        changingDropdown4.remove(2);
        changingDropdown4.remove(1);
        changingDropdown4.remove(0);
        var mainMenu = document.getElementById('studentSkillsDropdown2');

        if (mainMenu.value == "student") { 

            changingDropdown3.add(optionJuliusSherman,changingDropdown3.options[null]);
            changingDropdown3.add(optionTomGreen,changingDropdown3.options[null]);
            changingDropdown3.add(optionMaxRead,changingDropdown3.options[null]);
            changingDropdown3.add(optionDavidHopes,changingDropdown3.options[null]);
            changingDropdown3.add(optionJackieYun,changingDropdown3.options[null]);
            changingDropdown4.add(optionJuliusSherman2,changingDropdown4.options[null]);
            changingDropdown4.add(optionTomGreen2,changingDropdown4.options[null]);
            changingDropdown4.add(optionMaxRead2,changingDropdown4.options[null]);
            changingDropdown4.add(optionDavidHopes2,changingDropdown4.options[null]);
            changingDropdown4.add(optionJackieYun2,changingDropdown4.options[null]);

        } 

        else if (mainMenu.value == "skill") { 

            changingDropdown3.add(optionJava,changingDropdown3.options[null]);
            changingDropdown3.add(optionCSS,changingDropdown3.options[null]);
            changingDropdown3.add(optionGraphicDesign,changingDropdown3.options[null]);
            changingDropdown3.add(optionCPP,changingDropdown3.options[null]);
            changingDropdown3.add(optionJavascript,changingDropdown3.options[null]);
            changingDropdown4.add(optionJava2,changingDropdown4.options[null]);
            changingDropdown4.add(optionCSS2,changingDropdown4.options[null]);
            changingDropdown4.add(optionGraphicDesign2,changingDropdown4.options[null]);
            changingDropdown4.add(optionCPP2,changingDropdown4.options[null]);
            changingDropdown4.add(optionJavascript2,changingDropdown4.options[null]);

        }

    }

    if(number == 3) {

        changingDropdown5.remove(4);
        changingDropdown5.remove(3);
        changingDropdown5.remove(2);
        changingDropdown5.remove(1);
        changingDropdown5.remove(0);
        changingDropdown6.remove(4);
        changingDropdown6.remove(3);
        changingDropdown6.remove(2);
        changingDropdown6.remove(1);
        changingDropdown6.remove(0);
        var mainMenu = document.getElementById('studentSkillsDropdown3');

        if (mainMenu.value == "student") { 

            changingDropdown5.add(optionJuliusSherman,changingDropdown5.options[null]);
            changingDropdown5.add(optionTomGreen,changingDropdown5.options[null]);
            changingDropdown5.add(optionMaxRead,changingDropdown5.options[null]);
            changingDropdown5.add(optionDavidHopes,changingDropdown5.options[null]);
            changingDropdown5.add(optionJackieYun,changingDropdown5.options[null]);
            changingDropdown6.add(optionJuliusSherman2,changingDropdown6.options[null]);
            changingDropdown6.add(optionTomGreen2,changingDropdown6.options[null]);
            changingDropdown6.add(optionMaxRead2,changingDropdown6.options[null]);
            changingDropdown6.add(optionDavidHopes2,changingDropdown6.options[null]);
            changingDropdown6.add(optionJackieYun2,changingDropdown6.options[null]);

        } 

        else if (mainMenu.value == "skill") { 

            changingDropdown5.add(optionJava,changingDropdown5.options[null]);
            changingDropdown5.add(optionCSS,changingDropdown5.options[null]);
            changingDropdown5.add(optionGraphicDesign,changingDropdown5.options[null]);
            changingDropdown5.add(optionCPP,changingDropdown5.options[null]);
            changingDropdown5.add(optionJavascript,changingDropdown5.options[null]);
            changingDropdown6.add(optionJava2,changingDropdown6.options[null]);
            changingDropdown6.add(optionCSS2,changingDropdown6.options[null]);
            changingDropdown6.add(optionGraphicDesign2,changingDropdown6.options[null]);
            changingDropdown6.add(optionCPP2,changingDropdown6.options[null]);
            changingDropdown6.add(optionJavascript2,changingDropdown6.options[null]);

        }

    }

    if(number == 4) {

        changingDropdown7.remove(4);
        changingDropdown7.remove(3);
        changingDropdown7.remove(2);
        changingDropdown7.remove(1);
        changingDropdown7.remove(0);
        changingDropdown8.remove(4);
        changingDropdown8.remove(3);
        changingDropdown8.remove(2);
        changingDropdown8.remove(1);
        changingDropdown8.remove(0);
        var mainMenu = document.getElementById('studentSkillsDropdown4');

        if (mainMenu.value == "student") { 

            changingDropdown7.add(optionJuliusSherman,changingDropdown7.options[null]);
            changingDropdown7.add(optionTomGreen,changingDropdown7.options[null]);
            changingDropdown7.add(optionMaxRead,changingDropdown7.options[null]);
            changingDropdown7.add(optionDavidHopes,changingDropdown7.options[null]);
            changingDropdown7.add(optionJackieYun,changingDropdown7.options[null]);
            changingDropdown8.add(optionJuliusSherman2,changingDropdown8.options[null]);
            changingDropdown8.add(optionTomGreen2,changingDropdown8.options[null]);
            changingDropdown8.add(optionMaxRead2,changingDropdown8.options[null]);
            changingDropdown8.add(optionDavidHopes2,changingDropdown8.options[null]);
            changingDropdown8.add(optionJackieYun2,changingDropdown8.options[null]);

        } 

        else if (mainMenu.value == "skill") { 

            changingDropdown7.add(optionJava,changingDropdown7.options[null]);
            changingDropdown7.add(optionCSS,changingDropdown7.options[null]);
            changingDropdown7.add(optionGraphicDesign,changingDropdown7.options[null]);
            changingDropdown7.add(optionCPP,changingDropdown7.options[null]);
            changingDropdown7.add(optionJavascript,changingDropdown7.options[null]);
            changingDropdown8.add(optionJava2,changingDropdown8.options[null]);
            changingDropdown8.add(optionCSS2,changingDropdown8.options[null]);
            changingDropdown8.add(optionGraphicDesign2,changingDropdown8.options[null]);
            changingDropdown8.add(optionCPP2,changingDropdown8.options[null]);
            changingDropdown8.add(optionJavascript2,changingDropdown8.options[null]);

        }

    }

    if(number == 5) {

        changingDropdown9.remove(4);
        changingDropdown9.remove(3);
        changingDropdown9.remove(2);
        changingDropdown9.remove(1);
        changingDropdown9.remove(0);
        changingDropdown10.remove(4);
        changingDropdown10.remove(3);
        changingDropdown10.remove(2);
        changingDropdown10.remove(1);
        changingDropdown10.remove(0);
        var mainMenu = document.getElementById('studentSkillsDropdown5');

        if (mainMenu.value == "student") { 

            changingDropdown9.add(optionJuliusSherman,changingDropdown9.options[null]);
            changingDropdown9.add(optionTomGreen,changingDropdown9.options[null]);
            changingDropdown9.add(optionMaxRead,changingDropdown9.options[null]);
            changingDropdown9.add(optionDavidHopes,changingDropdown9.options[null]);
            changingDropdown9.add(optionJackieYun,changingDropdown9.options[null]);
            changingDropdown10.add(optionJuliusSherman2,changingDropdown10.options[null]);
            changingDropdown10.add(optionTomGreen2,changingDropdown10.options[null]);
            changingDropdown10.add(optionMaxRead2,changingDropdown10.options[null]);
            changingDropdown10.add(optionDavidHopes2,changingDropdown10.options[null]);
            changingDropdown10.add(optionJackieYun2,changingDropdown10.options[null]);

        } 

        else if (mainMenu.value == "skill") { 

            changingDropdown9.add(optionJava,changingDropdown9.options[null]);
            changingDropdown9.add(optionCSS,changingDropdown9.options[null]);
            changingDropdown9.add(optionGraphicDesign,changingDropdown9.options[null]);
            changingDropdown9.add(optionCPP,changingDropdown9.options[null]);
            changingDropdown9.add(optionJavascript,changingDropdown9.options[null]);
            changingDropdown10.add(optionJava2,changingDropdown10.options[null]);
            changingDropdown10.add(optionCSS2,changingDropdown10.options[null]);
            changingDropdown10.add(optionGraphicDesign2,changingDropdown10.options[null]);
            changingDropdown10.add(optionCPP2,changingDropdown10.options[null]);
            changingDropdown10.add(optionJavascript2,changingDropdown10.options[null]);

        }

    }    

}

function removeConstraint() {

    if(currentConstraint == 1) {
        return ;
    }

    else if(currentConstraint == 2) {

        var mustHavebox = document.getElementById("mustHaveDropdown2");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown2");
        var changingBox1 = document.getElementById("changingDropdown3");
        var andOrBox = document.getElementById("andOrDropdown2");
        var changingBox2 = document.getElementById("changingDropdown4");
        var constText = document.getElementById("constraintText2");

        mustHavebox.style.display = "none";
        studentSkillsbox.style.display = "none";
        changingBox1.style.display = "none";
        andOrBox.style.display = "none";
        changingBox2.style.display = "none";
        constText.style.display = "none";

        currentConstraint--;

    }

    else if(currentConstraint == 3) {

        var mustHavebox = document.getElementById("mustHaveDropdown3");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown3");
        var changingBox1 = document.getElementById("changingDropdown5");
        var andOrBox = document.getElementById("andOrDropdown3");
        var changingBox2 = document.getElementById("changingDropdown6");
        var constText = document.getElementById("constraintText3");

        mustHavebox.style.display = "none";
        studentSkillsbox.style.display = "none";
        changingBox1.style.display = "none";
        andOrBox.style.display = "none";
        changingBox2.style.display = "none";
        constText.style.display = "none";

        currentConstraint--;

    }

    else if(currentConstraint == 4) {

        var mustHavebox = document.getElementById("mustHaveDropdown4");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown4");
        var changingBox1 = document.getElementById("changingDropdown7");
        var andOrBox = document.getElementById("andOrDropdown4");
        var changingBox2 = document.getElementById("changingDropdown8");
        var constText = document.getElementById("constraintText4");

        mustHavebox.style.display = "none";
        studentSkillsbox.style.display = "none";
        changingBox1.style.display = "none";
        andOrBox.style.display = "none";
        changingBox2.style.display = "none";
        constText.style.display = "none";

        currentConstraint--;

    }

    else if(currentConstraint == 5) {

        var mustHavebox = document.getElementById("mustHaveDropdown5");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown5");
        var changingBox1 = document.getElementById("changingDropdown9");
        var andOrBox = document.getElementById("andOrDropdown5");
        var changingBox2 = document.getElementById("changingDropdown10");
        var constText = document.getElementById("constraintText5");

        mustHavebox.style.display = "none";
        studentSkillsbox.style.display = "none";
        changingBox1.style.display = "none";
        andOrBox.style.display = "none";
        changingBox2.style.display = "none";
        constText.style.display = "none";

        currentConstraint--;

    }

}

function addConstraint() {

    if(currentConstraint == 1) {

        var mustHavebox = document.getElementById("mustHaveDropdown2");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown2");
        var changingBox1 = document.getElementById("changingDropdown3");
        var andOrBox = document.getElementById("andOrDropdown2");
        var changingBox2 = document.getElementById("changingDropdown4");
        var constText = document.getElementById("constraintText2");

        mustHavebox.style.display = "inline";
        studentSkillsbox.style.display = "inline";
        changingBox1.style.display = "inline";
        andOrBox.style.display = "inline";
        changingBox2.style.display = "inline";
        constText.style.display = "inline";

        currentConstraint++;

    }

    else if(currentConstraint == 2) {

        var mustHavebox = document.getElementById("mustHaveDropdown3");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown3");
        var changingBox1 = document.getElementById("changingDropdown5");
        var andOrBox = document.getElementById("andOrDropdown3");
        var changingBox2 = document.getElementById("changingDropdown6");
        var constText = document.getElementById("constraintText3");

        mustHavebox.style.display = "inline";
        studentSkillsbox.style.display = "inline";
        changingBox1.style.display = "inline";
        andOrBox.style.display = "inline";
        changingBox2.style.display = "inline";
        constText.style.display = "inline";

        currentConstraint++;

    }

    else if(currentConstraint == 3) {

        var mustHavebox = document.getElementById("mustHaveDropdown4");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown4");
        var changingBox1 = document.getElementById("changingDropdown7");
        var andOrBox = document.getElementById("andOrDropdown4");
        var changingBox2 = document.getElementById("changingDropdown8");
        var constText = document.getElementById("constraintText4");

        mustHavebox.style.display = "inline";
        studentSkillsbox.style.display = "inline";
        changingBox1.style.display = "inline";
        andOrBox.style.display = "inline";
        changingBox2.style.display = "inline";
        constText.style.display = "inline";

        currentConstraint++;

    }

    else if(currentConstraint == 4) {

        var mustHavebox = document.getElementById("mustHaveDropdown5");
        var studentSkillsbox = document.getElementById("studentSkillsDropdown5");
        var changingBox1 = document.getElementById("changingDropdown9");
        var andOrBox = document.getElementById("andOrDropdown5");
        var changingBox2 = document.getElementById("changingDropdown10");
        var constText = document.getElementById("constraintText5");

        mustHavebox.style.display = "inline";
        studentSkillsbox.style.display = "inline";
        changingBox1.style.display = "inline";
        andOrBox.style.display = "inline";
        changingBox2.style.display = "inline";
        constText.style.display = "inline";

        currentConstraint++;

    }

    else if(currentConstraint == 5) {
        return;
    }

}