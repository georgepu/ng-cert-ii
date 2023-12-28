export class AppConstant {
    public static HOST = 'v3.football.api-sports.io';
    public static BASE_API_URL = `https://${AppConstant.HOST}/`;
    public static API_KEY = '6919685f178a943208f0b8c229975acc';
    public static CURRENT_SEASON = new Date().getFullYear();
}

export const NAV_ITEMS = [
    {
        country: 'England',
        league_id: 39,
        active: true
    },
    {
        country: 'Spain',
        league_id: 140,
        active: false
    },
    {
        country: 'Germany',
        league_id: 78,
        active: false
    },
    {
        country: 'France',
        league_id: 61,
        active: false
    },
    {
        country: 'Italy',
        league_id: 135,
        active: false
    },
];