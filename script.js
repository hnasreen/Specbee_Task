document.addEventListener("DOMContentLoaded", () => {
  const speakers = [
    {
      name: "John Doe",
      title: "Chief Marketing Officer",
      company: "Acme Corp",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091813/SpecBee/rhosur0bukm4rvg7ijr2.jpg",
    },
    {
      name: "Jane Smith",
      title: "Chief Engagement Officer",
      company: "Tech Solutions",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091813/SpecBee/pcca5kzeljimqk7nezsj.png",
    },
    {
      name: "Alice Brown",
      title: "Senior Developer",
      company: "Code Factory",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091812/SpecBee/qujdfzp4tbfyyc7qbrt5.jpg",
    },
    {
      name: "Michael Lee",
      title: "Product Manager",
      company: "Next Innovations",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091812/SpecBee/htzsah9eyyx4luooj6bu.jpg",
    },
    {
      name: "Sarah Wilson",
      title: "Chief Technical Officer",
      company: "Tech World",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091812/SpecBee/kn2rga906zgamgzek7iw.jpg",
    },
    {
      name: "David Johnson",
      title: "UX Designer",
      company: "Creative Labs",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091812/SpecBee/zw4oyb0e17qsm16ust4o.jpg",
    },
    {
      name: "Emily Davis",
      title: "Data Scientist",
      company: "Insightful Analytics",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091811/SpecBee/imkhwqbyt5moppwazae6.webp",
    },
    {
      name: "Robert Garcia",
      title: "Chief Operations Officer",
      company: "Efficient Systems",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091811/SpecBee/lobayhwgxanehuemvve8.webp",
    },
    {
      name: "Linda Martinez",
      title: "Marketing Director",
      company: "Bright Minds",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091811/SpecBee/fbeiolhi2uhdmhzwxv5l.jpg",
    },
    {
      name: "James Miller",
      title: "Software Engineer",
      company: "Digital Innovations",
      image: "https://res.cloudinary.com/dcq6ethny/image/upload/v1731091811/SpecBee/nm5dzvejhsvhzweopaug.jpg",
    },
  ];

  const speakerContainer = document.getElementById("speakerContainer");
  const popover = document.getElementById("speakerDetailsPopover");
  const closePopoverButton = document.querySelector(".close-btn");

  // Generate speaker cards dynamically
  speakers.forEach((speaker) => {
    const card = document.createElement("button");
    card.classList.add("swiper-slide");
    card.setAttribute("aria-label", `More details about ${speaker.name}`);
    // Add data attributes
    card.setAttribute("data-name", speaker.name);
    card.setAttribute("data-title", speaker.title);
    card.setAttribute("data-company", speaker.company);
    card.setAttribute("data-image", speaker.image);

    card.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}" class="speaker-card__image">
            <h3 class="speaker-card__name">${speaker.name}</h3>
            <p class="speaker-card__title">${speaker.title}</p>
            <p class="speaker-card__company">${speaker.company}</p>
        `;

    speakerContainer.appendChild(card);
  });

  // Handle card click to show popover
  speakerContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".swiper-slide");
    if (card) {
      const name = card.getAttribute("data-name");
      const title = card.getAttribute("data-title");
      const company = card.getAttribute("data-company");
      const image = card.getAttribute("data-image");

      // Populate popover with speaker details
      document.getElementById("popoverName").textContent = name;
      document.getElementById("popoverTitle").textContent = title;
      document.getElementById("popoverCompany").textContent = company;
      document.getElementById("popoverImage").src = image;

      popover.classList.add("show");

      document.querySelector(".container").classList.add("swiper-shift");
    }
  });

  closePopoverButton.addEventListener("click", () => {
    popover.classList.remove("show");
    document.querySelector(".container").classList.remove("swiper-shift");
  });

  // Initialize Swiper
  new Swiper(".card-wrapper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
