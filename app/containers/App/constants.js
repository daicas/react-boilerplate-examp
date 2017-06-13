/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const LOAD_ARTICLES = 'boilerplate/App/LOAD_ARTICLES';
export const LOAD_ARTICLES_SUCCESS = 'boilerplate/App/LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_ERROR = 'boilerplate/App/LOAD_ARTICLES_ERROR';
export const LOAD_ARTICLES_DETAIL = 'boilerplate/App/LOAD_ARTICLES_DETAIL';
export const DEFAULT_LOCALE = 'en';
