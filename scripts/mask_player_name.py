"""
Mask the upper-right "player name (Lv)" overlay on Windrose menu screenshots.

Use ONLY on menu-system screenshots (Character / Inventory / Map / Discoveries
/ Adventures tab visible at the top). Do NOT run on field gameplay, NPC, helm,
or ESC pause screens — the rectangle is fixed for the menu HUD layout.

Mask region (calibrated from 2560x1440 menu shots; scales proportionally):
  x: 0.742*w  ..  w     (~600 px wide on 2560 wide)
  y: 0        ..  0.066*h (~95 px tall on 1440 tall)
Fill color: #1c1d21 (matches the menu's dark side panel).

Usage:
  python mask_player_name.py <input> [<output>]

If <output> is omitted, the file is overwritten in place.
Returns non-zero on failure so callers can detect problems.
"""
import os
import sys
from PIL import Image

DARK_BG = (28, 29, 33)  # #1c1d21
X_RATIO = 0.742         # left edge of mask (right side of screen)
Y_RATIO = 0.066         # bottom edge of mask (top of screen)


def mask(src: str, dst: str) -> None:
    with Image.open(src) as im:
        im = im.convert("RGB")
        w, h = im.size
        x1 = round(w * X_RATIO)
        y2 = round(h * Y_RATIO)
        # PIL paste expects (x1, y1, x2, y2)
        from PIL import ImageDraw
        draw = ImageDraw.Draw(im)
        draw.rectangle([x1, 0, w, y2], fill=DARK_BG)
        # Save: keep .jpg as JPEG with high quality
        ext = os.path.splitext(dst)[1].lower()
        if ext in (".jpg", ".jpeg"):
            im.save(dst, "JPEG", quality=92, optimize=True)
        elif ext == ".png":
            im.save(dst, "PNG", optimize=True)
        elif ext == ".webp":
            im.save(dst, "WEBP", quality=92)
        else:
            im.save(dst)


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: mask_player_name.py <input> [<output>]", file=sys.stderr)
        return 2
    src = sys.argv[1]
    dst = sys.argv[2] if len(sys.argv) >= 3 else src
    if not os.path.isfile(src):
        print(f"input not found: {src}", file=sys.stderr)
        return 1
    try:
        mask(src, dst)
    except Exception as e:
        print(f"mask failed: {e}", file=sys.stderr)
        return 1
    print(dst)
    return 0


if __name__ == "__main__":
    sys.exit(main())
