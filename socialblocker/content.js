/******************************************
 *  Author : Joseph Farah
 *  Created On : 3/4/2025
 *  File : popup.js
 ******************************************/



function hideElements() {
    const selectors = [
        ".x1qjc9v5.x78zum5.x1q0g3np.xl56j7k.xh8yej3",
        ".x1qjc9v5.x78zum5.x1q0g3np.x5yr21d.xw2csxc.x10wlt62.x1n2onr6.x1rohswg.xfk6m8",
        ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x1iyjqo2.x2lwn1j.xl56j7k",
        "footer"
   
   
        
    ];

    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.display = "none"; // Hide the elements
        });
    });

 
}

// Document listens for when the content is loaded, it fires off the hide elements 
hideElements()