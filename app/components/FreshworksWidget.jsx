import Head from 'next/head';
import Script from 'next/script'

const FreshworksWidget = () => {
    const loadFreshworksWidget = () => {
        window.fwSettings = {
          'widget_id': 151000002074
        };
        !function() {
          if ("function" != typeof window.FreshworksWidget) {
            var n = function() {
              n.q.push(arguments)
            };
            n.q = [], window.FreshworksWidget = n
          }
        }()
      };
  return (
    <>
      <Script type='text/javascript' src='https://widget.freshworks.com/widgets/151000002074.js' async defer></Script>
    </>
    
  );
};

export default FreshworksWidget;