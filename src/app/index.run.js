(function() {
  'use strict';

  angular
    .module('pmGroupProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
