// ── Menú móvil — Posta del Este ──
// Copia los links del nav y crea un overlay directo en <body>
(function() {
  var sourceLinks = document.getElementById('navLinks');
  if (!sourceLinks) return;

  // Crear overlay
  var overlay = document.createElement('ul');
  overlay.id = 'mobile-menu-overlay';

  // Botón cerrar (X)
  var closeBtn = document.createElement('button');
  closeBtn.id = 'mobile-menu-close';
  closeBtn.innerHTML = '<span></span><span></span>';
  overlay.appendChild(closeBtn);

  // Copiar los <li> con sus links
  var items = sourceLinks.querySelectorAll('li');
  items.forEach(function(li) {
    var clone = li.cloneNode(true);
    overlay.appendChild(clone);
  });

  document.body.appendChild(overlay);

  // Marcar página activa
  overlay.querySelectorAll('a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href && !href.startsWith('#')) {
      var current = location.pathname.split('/').pop() || 'index.html';
      var target = href.split('/').pop();
      if (target === current) a.classList.add('active');
    }
  });

  // Burger abre overlay
  var burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Cerrar con X o con cualquier link
  function cerrar() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', cerrar);
  overlay.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', cerrar);
  });
})();
