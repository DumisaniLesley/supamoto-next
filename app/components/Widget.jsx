import Head from 'next/head';
import Script from 'next/script';

export default function widget() {
  return (
    <>
        <Head>
            <script
            async
            src="https://widget.freshworks.com/widgets/151000002074.js" // Replace xxxxxx with your Freshdesk widget ID
            type="text/javascript"
            ></script>
        </Head>
        <button
            className="fixed bottom-0 right-0 p-4 bg-blue-500 text-white rounded-tl-md cursor-pointer"
            onClick={() => {
                window.FreshworksWidget.show();
            }}
            >Contact Us</button>
    </>
  );
}
