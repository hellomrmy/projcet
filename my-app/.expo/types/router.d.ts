/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/BookingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/MenuScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/app/BookingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/MenuScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/MyReservationsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/SearchResultScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/SettingsScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/BookingScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/MenuScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/app/BookingScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/app/MenuScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/app/MyReservationsScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/app/SearchResultScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/app/SettingsScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/BookingScreen${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/MenuScreen${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/app/BookingScreen${`?${string}` | `#${string}` | ''}` | `/app/MenuScreen${`?${string}` | `#${string}` | ''}` | `/app/MyReservationsScreen${`?${string}` | `#${string}` | ''}` | `/app/SearchResultScreen${`?${string}` | `#${string}` | ''}` | `/app/SettingsScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/BookingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/MenuScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/app/BookingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/MenuScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/MyReservationsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/SearchResultScreen`; params?: Router.UnknownInputParams; } | { pathname: `/app/SettingsScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
