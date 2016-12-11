/*
 *  Waltz
 * Copyright (c) David Watkins. All rights reserved.
 * The use and distribution terms for this software are covered by the
 * Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
 * which can be found in the file epl-v10.html at the root of this distribution.
 * By using this software in any fashion, you are agreeing to be bound by
 * the terms of this license.
 * You must not remove this notice, or any other, from this software.
 *
 */
import angular from 'angular';


export default () => {

    const module = angular.module('waltz.navbar', []);

    module
        .directive('waltzNavbar', require('./directives/navbar'))
        .directive('waltzNavbarRecentlyViewed', require('./directives/navbar-recently-viewed'))
        .directive('waltzNavbarProfile', require('./directives/navbar-profile'));

    module
        .component('waltzNavbarSearchForm', require('./components/navbar-search-form'))
        .component('waltzNavSearchResults', require('./components/nav-search-results'));

    return module.name;
};