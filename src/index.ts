interface RgbComponent {
    r: number, g: number, b: number
}

type HexColour = string
type HexValue = string

function componentToHex(c: number = 0): HexValue {
    const n: number = Math.max(0, Math.min(c, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16)
}

function rgbToHex(r: number = 0, g: number = 0, b: number = 0): HexColour {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function tintCalc(n: number = 0, t: number = 0): number {
    return Math.round(((100 - t) * .01) * (255 - n) + n)
}

function hexToRgb(hex: HexColour): RgbComponent {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || ['00', '00', '00']
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    }
}

export function tintHex(hex: string, tint: number): HexColour {
    const c = hexToRgb(hex)
    return rgbToHex(tintCalc(c.r, tint), tintCalc(c.g, tint), tintCalc(c.b, tint))
}
