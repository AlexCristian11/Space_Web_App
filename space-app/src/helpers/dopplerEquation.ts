export const calculateRedshiftFromDistance = (distance: number, hubbleConstant: number, speedOfLight: number): number => {
    const distanceMegaparsecs = distance * 1e6; // Convert from parsecs to megaparsecs
    const speedOfLightKmPerS = speedOfLight * 1e3;

    // Calculate redshift
    // console.log("Distance in Megaparsecs: ", distanceMegaparsecs);
    // console.log("Speed of light: ", speedOfLightKmPerS);
    
    const redshift = (hubbleConstant * distanceMegaparsecs) / speedOfLightKmPerS;

    // console.log("Calculated Redshift:", redshift);
    

    return redshift;
}

export const mapRedshiftToColor = (redshift: number): string => {
    // Map redshift to hue (blue to red)
    const hue = 240 - (redshift * 10); // Experiment with the scaling factor

    // Ensure the hue is within the valid range (0 to 360)
    const adjustedHue = (hue < 0) ? 0 : (hue > 360) ? 360 : hue;

    // Use HSL color directly for the background with fixed saturation and lightness
    const backgroundColor = `hsl(${adjustedHue}, 100%, 50%)`;

    return backgroundColor;
}