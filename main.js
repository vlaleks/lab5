window.onload = () => {
    document.querySelector("#trigger").addEventListener('click', function() {
        document.getElementById("menu").style['transform'] = 'translate(0%,0px)';
        document.getElementById("contax").classList.add('contax');
        document.getElementById("triggers").style['background-color'] = 'white';
        document.getElementById("triggers").style['transform'] = 'rotate(45deg)';
        document.getElementById("triggers").style['margin-bottom'] = '-4px';
        document.getElementById("triggerss").style['display'] = 'none';
        document.getElementById("triggersss").style['background-color'] = 'white';
        document.getElementById("triggersss").style['transform'] = 'rotate(-45deg)';
        document.getElementById("triggers").classList.remove('up');
        document.getElementById("triggers").classList.add('uper')
        document.querySelector(".kuki").style['display'] = 'block';
        

      });
      
    

    document.querySelector(".kuki").addEventListener('click', function() {
        
      
      
    
        document.getElementById("menu").style['transform'] = 'translate(-110%,0px)';
        document.getElementById("contax").classList.remove('contax');
        document.getElementById("triggers").style['background-color'] = 'black';
        document.getElementById("triggers").style['transform'] = 'rotate(0deg)';
        document.getElementById("triggers").style['margin-bottom'] = '4px';
        document.getElementById("triggerss").style['display'] = 'block';
        document.getElementById("triggersss").style['background-color'] = 'black';
        document.getElementById("triggersss").style['transform'] = 'rotate(-0deg)';
        document.querySelector(".kuki").style['display'] ='none';
    });
    
  }