// Dropdown
if (document.querySelector(".dropdown_icon")) {
    const arrows = document.querySelectorAll(".dropdown_icon");
    arrows.forEach(arrow => {
        arrow.addEventListener("click", (e) => {
            e.stopPropagation();
            document.querySelectorAll(".dropdown_content").forEach(box => {
                box.style.display = "none";
            });
            const targetId = arrow.getAttribute("data-target");
            const targetBox = document.getElementById(targetId);
            targetBox.style.display = "block";
        });
    });
    document.addEventListener("click", (event) => {
        const inside = event.target.closest(".dropdown_box");
        if (!inside) {
            document.querySelectorAll(".dropdown_content").forEach(box => {
                box.style.display = "none";
            });
        }
    });
}

// Slide 1
if (document.getElementById("slide_container")) {
    let slide_current = 1;
    const slide_total = 2;
    function slide_showPage(page) {
        document.querySelectorAll(".slide_page")
            .forEach(p => p.classList.remove("active"));

        document.getElementById(`slide_page_${page}`)
            .classList.add("active");
    }
    document.getElementById("slide_next").addEventListener("click", () => {
        slide_current++;
        if (slide_current > slide_total) {
            slide_current = 1;
        }
        slide_showPage(slide_current);
    });
    document.getElementById("slide_prev").addEventListener("click", () => {
        slide_current--;
        if (slide_current < 1) {
            slide_current = slide_total;
        }
        slide_showPage(slide_current);
    });
    slide_showPage(1);
}

// Slide 2
if (document.getElementById("slide_container-2")) {
    let slide_current_2 = 1;
    const slide_total_2 = 2;
    function slide_showPage_2(page) {
        document.querySelectorAll(".slide_page_2")
            .forEach(p => p.classList.remove("active_2"));
        document.getElementById(`slide_page-2_${page}`)
            .classList.add("active_2");
    }
    document.getElementById("slide_next-2").addEventListener("click", () => {
        slide_current_2++;
        if (slide_current_2 > slide_total_2) {
            slide_current_2 = 1;
        }
        slide_showPage_2(slide_current_2);
    });
    document.getElementById("slide_prev-2").addEventListener("click", () => {
        slide_current_2--;
        if (slide_current_2 < 1) {
            slide_current_2 = slide_total_2;
        }
        slide_showPage_2(slide_current_2);
    });
    slide_showPage_2(1);
}
