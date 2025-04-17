import { ScrollTrigger } from "gsap/all";
import "./test.css";
import gsap from "gsap";
import $ from "jquery"
export default function TestMachine () {
  // select 3 random initial values between -360 and 360, snapping in increments of 36 so it doesn't stop between panels
  var random1 = gsap.utils.random(-360, 360, 36);
  var random2 = gsap.utils.random(-360, 360, 36);
  var random3 = gsap.utils.random(-360, 360, 36);

  var textcontent = document.getElementById("textcontent");
  // first spin on page load
  gsap
    .timeline({ onComplete: finishScroll })
    .set(".ring", { rotationX: -90 })
    //set initial rotationx so item 1 appears at the bottom
    .set(".item", {
      // apply transform rotations to each image
      rotateX: (i) => i * -36,
      transformOrigin: "50% 50% -220px",
      z: 220,
    })

    // while this is happening, rotate the rings by a random amount
    .to("#ring1", { rotationX: random1, duration: 1, ease: "power3" }, "<=")
    .to("#ring2", { rotationX: random2, duration: 1.5, ease: "power3" }, "<=")
    .to("#ring3", { rotationX: random3, duration: 2, ease: "power3" }, "<=");

  const items = gsap.utils.toArray(".item");

  // when the ring stops spinning
  function finishScroll() {
    //this finds the active item
    items.forEach((item, i) => {
      ScrollTrigger.create({
        //  markers: true,
        trigger: item,
        scroller: ".console-outer",
        start: "top center-=59px",
        end: "bottom center-=59px",
        toggleClass: "active",
      });
    });
    // this looks at what the active item is in each column
    activeitem1 = $("#col1 .item.active").data("content");
    activeitem2 = $("#col2 .item.active").data("content");
    activeitem3 = $("#col3 .item.active").data("content");

    // this populates the results area depending on the result
    if ($(".notstarted")[0]) {
    } else {
      // all the same
      if (activeitem1 === activeitem2 && activeitem2 === activeitem3) {
        textcontent.innerHTML =
          "<p>You won, woohoo! Everyone gets " + activeitem1 + "s!</p>";
      }
      // none the same
      if (
        activeitem1 != activeitem2 &&
        activeitem2 != activeitem3 &&
        activeitem1 != activeitem3
      ) {
        textcontent.innerHTML = "<p>Bad luck, you lost</p>";
      }
      // first and second the same
      if (
        activeitem1 === activeitem2 &&
        activeitem1 != activeitem3 &&
        activeitem2 != activeitem3
      ) {
        textcontent.innerHTML =
          "<p>Close but no " +
          activeitem1 +
          "s for you. Why not try again?</p>";
      }
      // first and third the same
      if (
        activeitem1 === activeitem3 &&
        activeitem1 != activeitem2 &&
        activeitem3 != activeitem2
      ) {
        textcontent.innerHTML =
          "<p>Close but no " +
          activeitem1 +
          "s for you. Why not try again?</p>";
      }
      // second and third the same
      if (
        activeitem2 === activeitem3 &&
        activeitem1 != activeitem3 &&
        activeitem1 != activeitem2
      ) {
        textcontent.innerHTML =
          "<p>Close but no " +
          activeitem3 +
          "s for you. Why not try again?</p>";
      }
    }
  }

  // on click spin the wheels
  var button = $("button.trigger");
  $(button).click(function () {
    textcontent.innerHTML = "<p>round and round it goes...</p>";
    $(".stage").removeClass("notstarted");
    $(".ring:not(.held) .item").removeClass("active"); // remove the active class
    // get three random values
    var random1 = gsap.utils.random(-1440, 1440, 36);
    var random2 = gsap.utils.random(-1440, 1440, 36);
    var random3 = gsap.utils.random(-1440, 1440, 36);

    // spin each cell to a random value
    let scrollcells = gsap.timeline({ paused: true, onComplete: finishScroll });

    scrollcells

      .to(
        "#ring1:not(.held)",
        {
          rotationX: random1,
          duration: 2,
          ease: "power3",
        },
        "<"
      )
      .to(
        "#ring2:not(.held)",
        {
          rotationX: random2,
          duration: 3,
          ease: "power3",
        },
        "<"
      )
      .to(
        "#ring3:not(.held)",
        {
          rotationX: random3,
          duration: 4,
          ease: "power3",
        },
        "<"
      );
    scrollcells.play();
  });

  var buttonhold = $("button.hold");
  $(buttonhold).click(function () {
    ringhold = $(this).data("controls");
    $(this).toggleClass("held");
    $(this).text(function (i, text) {
      return text === "Hold" ? "Held" : "Hold";
    });

    ringtohold = document.getElementById(ringhold);
    $(ringtohold).toggleClass("held");
  });

  return (
    <div className="stage notstarted">
      <div className="button-area">
        <button id="play" className="trigger">
          Let's Play!
        </button>
      </div>
      <div className="row console">
        <div className="console-outer">
          <div id="col1" className="col third wheel">
            <div className="container">
              <ul id="ring1" className="ring">
                <li data-content="apple" className="item">
                  <span>🍎</span>
                </li>
                <li data-content="star" className="item">
                  <span>🌟</span>
                </li>
                <li data-content="rainbow" className="item">
                  <span>🌈</span>
                </li>
                <li data-content="unicorn" className="item">
                  <span>🦄</span>
                </li>
                <li data-content="mushroom" className="item">
                  <span>🍄</span>
                </li>
                <li data-content="flower" className="item">
                  <span>🌸</span>
                </li>
                <li data-content="sapling" className="item">
                  <span>🌱</span>
                </li>
                <li data-content="whale" className="item">
                  <span>🐳</span>
                </li>
                <li data-content="owl" className="item">
                  <span>🦉</span>
                </li>
                <li data-content="dinosaur" className="item">
                  <span>🦕</span>
                </li>
              </ul>
            </div>
          </div>
          <div id="col2" className="col third wheel">
            <div className="container">
              <ul id="ring2" className="ring">
                <li data-content="apple" className="item">
                  <span>🍎</span>
                </li>
                <li data-content="star" className="item">
                  <span>🌟</span>
                </li>
                <li data-content="rainbow" className="item">
                  <span>🌈</span>
                </li>
                <li data-content="unicorn" className="item">
                  <span>🦄</span>
                </li>
                <li data-content="mushroom" className="item">
                  <span>🍄</span>
                </li>
                <li data-content="flower" className="item">
                  <span>🌸</span>
                </li>
                <li data-content="sapling" className="item">
                  <span>🌱</span>
                </li>
                <li data-content="whale" className="item">
                  <span>🐳</span>
                </li>
                <li data-content="owl" className="item">
                  <span>🦉</span>
                </li>
                <li data-content="dinosaur" className="item">
                  <span>🦕</span>
                </li>
              </ul>
            </div>
          </div>
          <div id="col3" className="col third wheel">
            <div className="container">
              <ul id="ring3" className="ring">
                <li data-content="apple" className="item">
                  <span>🍎</span>
                </li>
                <li data-content="star" className="item">
                  <span>🌟</span>
                </li>
                <li data-content="rainbow" className="item">
                  <span>🌈</span>
                </li>
                <li data-content="unicorn" className="item">
                  <span>🦄</span>
                </li>
                <li data-content="mushroom" className="item">
                  <span>🍄</span>
                </li>
                <li data-content="flower" className="item">
                  <span>🌸</span>
                </li>
                <li data-content="sapling" className="item">
                  <span>🌱</span>
                </li>
                <li data-content="whale" className="item">
                  <span>🐳</span>
                </li>
                <li data-content="owl" className="item">
                  <span>🦉</span>
                </li>
                <li data-content="dinosaur" className="item">
                  <span>🦕</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row holdcontrols">
          <div className="col">
            <button data-controls="ring1" id="hold1" className="hold">
              Hold
            </button>
          </div>
          <div className="col">
            <button data-controls="ring2" id="hold2" className="hold">
              Hold
            </button>
          </div>
          <div className="col">
            <button data-controls="ring3" id="hold3" className="hold">
              Hold
            </button>
          </div>
        </div>
      </div>
      <div className="results">
        <div id="textcontent">How will you do?</div>
      </div>
    </div>
  );
}