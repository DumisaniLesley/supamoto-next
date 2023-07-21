import Head from 'next/head';
import Script from 'next/script'

const FeedbackForm = () => {
  return (
    <>
        <Script
          type="text/javascript"
          src="https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.js"
        ></Script>
      <Head>
        <style
          type="text/css"
          media="screen, projection"
          dangerouslySetInnerHTML={{
            __html: `
              @import url(https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.css);
            `,
          }}
        ></style>
      </Head>
      <iframe
        title="Feedback Form"
        className="freshwidget-embedded-form"
        id="freshwidget-embedded-form"
        src="https://supamoto-help.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&formTitle=SupaMoto+Support&submitTitle=Send+Message&searchArea=no"
        scrolling="no"
        height="500px"
        width="100%"
        frameBorder="0"
      ></iframe>
    </>
  );
};

export default FeedbackForm;