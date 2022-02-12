let win = function(set) {
  if (!set.url) return;
  set = Object.assign({}, {
    w: 650,
    h: 570,
    name: ""
  }, set);
  let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left,
    dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top,
    width = window.innerWidth ? window.innerWidth : d.documentElement.clientWidth ? d.documentElement.clientWidth : screen.width,
    height = window.innerHeight ? window.innerHeight : d.documentElement.clientHeight ? d.documentElement.clientHeight : screen.height,
    left = ((width / 2) - (set.w / 2)) + dualScreenLeft,
    top = ((height / 2) - (set.h / 2)) + dualScreenTop;
  let open = window.open(set.url, set.name, 'scrollbars=yes, width=' + set.w + ', height=' + set.h + ', top=' + top + ', left=' + left);
  if (window.focus) open.focus();
};

/**
 * Функция открытия сервиса share
 * @param {Event} e - событие, получаемое при "click"
 */
let shareIt = function(e) {
  let u = window.location.href; // url
  let t = document.title; // title
  let d = document.head.querySelector("meta[name=description]") || ""; // meta description
  switch (e.target.getAttribute("data-type")) {
    case "vk":
      win({
        url: "//vk.com/share.php?url=" + u + "&title=" + t + "&description=" + d,
        name: "vk"
      });
      break;
    case "fb":
      win({
        url: "//facebook.com/sharer.php?m2w&" + 'u=' + u,
        name: "fb"
      });
      break;
    default:
      return false;
  }
};

// обработчик клика для блока share
shareBox.addEventListener("click", function(e) {
  if (e.target !== e.currentTarget) shareIt(e);
  e.preventDefault();
});
