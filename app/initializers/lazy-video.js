import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';

export default {
  name: 'flash-messages',
  initialize: function(application){
    application.register('service:lazy-video-providers', LazyVideoProviders, { singleton: true });
    application.inject('component:lazy-video', 'providers', 'service:lazy-video-providers');
  }
};
