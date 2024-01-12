export const calculateSchwarzschildRadius = (mass: number): number => {
    // Constans
    const G = 6.674e-11; // Gravitational constant in m^3 kg^(-1) s^(-2)
    const c = 3.00e8; // Speed of light in m/s
    
    // Calculate Schwarzschild radius
    const rs = (2 * G * mass) / (c ** 2);

    return rs;
}

export const isBlackHoleCandidate = (objectRadius: number, schwarzschildRadius: number): boolean => {
    return objectRadius < schwarzschildRadius;
}