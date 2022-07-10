## 안드로이드_webview

`웹뷰`는 웹페이지를 보여주는 위젯, 
웹뷰는 반응형 웹사이트를 안드로이드 디바이스에서 띄워줄 수 있는 기능

@ 매니페스트에 퍼미션 추가

```kotlin
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
packaage="com.example.webview111">
<uses-permission android:name="android.permission.INTERNET" />

<LinearLayout
  xmlns:android="http://scheemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  tools:context=".MainActivity">
  
  <Webview
    android:id="@+id/web"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
  />
 </LinearLayout>
 
 ```
 
 ```kotlin
 public class MainActivity extends Activity {
  private WebView nWeb;
  private WebSetting mWebSettings;
  
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    
    mWeb = (WebView) findViewById(R.id.web);
    mWeb.getSettings().setJavaScriptEnabled(true);
    
    mWeb.loadUrl("http://www.webview.com");
    mWeb.setWebChromeClient(new WebChromeClient());
    
    mWeb.setWebViewClient(new WebViewClientClass()); 
  }
  
  @Override
  publick boolean onKeyDown(int keyCode, keyEvent event) {
    if((keyCode == KeyEvent.KEYCODE_BACK) && m.Web.canGoBack()){ 
      mWeb.goBack();
      return true;
    }
    return super.onKeyDown(keyCode, event);
  }
  
  private class WebViewClientClass extends WebViewClient {
    
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
      view.loadUrl(url);
      return ture;
    }
  }
}

```
