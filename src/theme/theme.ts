const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};
type BreakPointsType = typeof breakpoints;

type themeProps = {
    breakpoints: BreakPointsType;
}
const THEME: themeProps = {
    breakpoints,
}
export default THEME;