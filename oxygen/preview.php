<?php
/**
 * Local preview only — NOT part of the Oxygen deliverable.
 *
 * Wraps digital-events-oxygen.php in a minimal HTML shell so you can view
 * the Code Block fragment in a browser without a WordPress install. The
 * real page won't have this file; the theme supplies the surrounding
 * <html>/<head>/<body> and site header/nav/footer.
 *
 * Usage:
 *   php -S localhost:8000 -t oxygen
 *   open http://localhost:8000/preview.php
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Oxygen Code Block Preview — Digital Events</title>
</head>
<body>
  <header style="background:#222;color:#fff;padding:20px;text-align:center;font-family:sans-serif;">
    Simulated theme header / nav (not part of the code block)
  </header>

  <?php include __DIR__ . '/digital-events-oxygen.php'; ?>

  <footer style="background:#222;color:#fff;padding:20px;text-align:center;font-family:sans-serif;">
    Simulated theme footer (not part of the code block)
  </footer>
</body>
</html>
