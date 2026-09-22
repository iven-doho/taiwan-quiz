/* ============================================================
   Feel Taiwan — board embed, auto height
   ------------------------------------------------------------
   WHERE THIS GOES
   In Wix Studio, open the page that holds the board, open the
   code panel at the bottom, and paste this in. It is PAGE code,
   not backend. Publish afterwards.

   WHAT IT DOES
   The board reports the height it wants — on load, on resize,
   and whenever its content changes (opening a square changes it).
   This matches the element to that number, so there is never a
   blank band and you never tune heights per breakpoint again.

   Without this, the board still works. It just needs a fixed
   height set per breakpoint (Desktop 700 / Tablet 900 / Mobile 644),
   and small phones will show a cream band at the bottom.
   ============================================================ */

$w.onReady(() => {
  // Wix usually names the first HTML element "html1". Click the element
  // in Studio to see its real ID and change this if it differs.
  const ELEMENT_ID = '#html1';

  const find = () => {
    // by ID first
    try {
      const byId = $w(ELEMENT_ID);
      if (byId && typeof byId.onMessage === 'function') return byId;
    } catch (e) { /* no element with that id on this page */ }
    // fall back to whatever HTML component is on the page
    try {
      const byType = $w('HtmlComponent');
      if (byType && typeof byType.onMessage === 'function') return byType;
    } catch (e) { /* type selector unavailable */ }
    return null;
  };

  const box = find();

  if (!box) {
    console.warn(
      '[board] No HTML element found. Set ELEMENT_ID to the id shown in Studio ' +
      'when you select the embed. The board still works on a fixed height.'
    );
    return;
  }

  box.onMessage((event) => {
    const h = event && event.data && event.data.boardHeight;
    // sanity-check before resizing, so a stray message cannot collapse
    // or balloon the section
    if (typeof h === 'number' && h >= 200 && h <= 3000) {
      box.height = Math.round(h);
    }
  });
});
