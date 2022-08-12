import React from "react";
import "./index.scss";
import { defaultOptions, options } from "../../Content/localStorage";
document.title = "設定";

const Options = () => {
  const [options, setOptions] = React.useState<options>(defaultOptions);

  const onChange = (key: string, value: string | number | boolean) => {
    const newOptions = { ...options, [key]: value };
    setOptions(newOptions);
    chrome.storage.local.set(newOptions, () => {
      console.log("保存しました！", { key, value });
    });
  };

  React.useEffect(() => {
    chrome.storage.local.get(null, (result) => {
      Object.keys(defaultOptions).map((key: string) => {
        if (result[key] === undefined) {
          result[key] = defaultOptions[key];
        }
      });
      Object.keys(result).map((key: string) => {
        if (!(key in defaultOptions)) {
          delete result[key];
          chrome.storage.local.remove(key as string, () => {
            console.log("存在しないオプションを削除しました！");
          });
        }
      });
      console.log("取得しました！", result);
      setOptions(result);
    });
  }, []);

  return (
    <>
      <header>
        <span className="inner">
          <i className="codicon codicon-settings-gear" />{" "}
        </span>
        <h1>設定</h1>
      </header>
      <main>
        <div className="wrapper">
          {Object.keys(options).map((key) => {
            return (
              <div className="editor" key={key}>
                <>
                  <label htmlFor={key}>{key}</label>
                  {typeof options[key] === "boolean" ? (
                    <input
                      type="checkbox"
                      id={key}
                      name={key}
                      checked={options[key] as boolean}
                      onChange={() => onChange(key, !(options[key] as boolean))}
                    />
                  ) : typeof options[key] === "number" ? (
                    <input
                      type="number"
                      id={key}
                      name={key}
                      value={options[key] as number}
                      onChange={(e) => onChange(key, parseInt(e.target.value))}
                    />
                  ) : (
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={options[key] as string}
                      onChange={(e) => onChange(key, e.target.value)}
                    />
                  )}
                </>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Options;
