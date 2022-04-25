module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    
    plugins: ['import-glob',
      [ 
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
        }
      ],
    ]
  };
};
