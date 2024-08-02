import React, { useState, useEffect } from "react";
import Contactformstyles from "../styles/ContactForm.module.scss";
import ContactformstylesMain from "../styles/ContactFormMain.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Buttonstyles from "../styles/Button.module.scss";
import { useRouter } from "next/router";
import ContactInfo from "./ContactInfo";
import { useTranslation } from "next-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";
import Modal from "./Modal";
import ServicesList from "../data/services";
import RespondEmail from "../components/emails/fileportes-reply-email-opt";
import Link from "next/link";

import { Resend } from "resend";
import ReactDOMServer from "react-dom/server";

const resend = new Resend("re_gTSpYirv_KTyUjkbJKRSh7E7RZR3g3k1b");

const Contactform = ({ pageStyle }) => {
  const styleSheet =
    pageStyle === "Main" ? ContactformstylesMain : Contactformstyles;
  const { t, i18n } = useTranslation("common", { keyPrefix: "contactUs" });

  const { t: e } = useTranslation("common", { keyPrefix: "email" });

  const services = ServicesList();

  const { asPath } = useRouter();

  const pageVariants = {
    header: {
      componentStyle: t("basePage"),
      defaultStyle: t("anyPage"),
      mainStyle: t("mainPage"),
    },
    style: {
      componentStyle: {},
      defaultStyle: "",
    },
  };

  const [selectedService, setSelectedService] = useState(
    asPath.split("=")[1] && services[asPath.split("=")[1]]
      ? services[asPath.split("=")[1]]
      : services["Budget"]
  );
  const [selectedServiceID, setSelectedServiceID] = useState(
    asPath.split("=")[1] && services[asPath.split("=")[1]]
      ? asPath.split("=")[1]
      : `Budget`
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsChecked: false,
    service: selectedService,
    postcodeFrom: "",
    postcodeTo: "",
    includePackaging: false,
    dear: e("dear"),
    thanks: e("thanks"),
    wait1: e("wait1"),
    wait2: e("wait2"),
    preview: e("preview"),
    btn: e("btn"),
    footer: e("footer"),
    regards: e("regards"),
    team: e("team"),
  });

  const styles = {
    initial: { transform: "scaleY(0)" },
    open: { transform: "scaleY(1)" },
  };
  const [styling, setStyling] = useState({ transform: "scaleY(0)" });

  const [showModal, setShowmodal] = useState(false);

  useEffect(() => {
    setFormData({ ...formData, service: selectedService });
    setSelectedService(services[selectedServiceID]);
  }, [selectedService, i18n.language]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createEmail = (...args) => {
      return (
        "<!doctype html>" +
        ReactDOMServer.renderToStaticMarkup(RespondEmail(...args))
      );
    };

    const sendData = createEmail(
      formData.dear,
      formData.firstName,
      formData.thanks,
      formData.wait1,
      formData.wait2,
      formData.preview,
      formData.btn,
      formData.footer,
      formData.regards,
      formData.team
    );

    const formedData = [sendData, formData];

    // // console.log(formData.service)

    const response = await fetch(`${process.env.AWS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formedData),
    });

    if (response.ok) {
      // console.log('sent!')
      setShowmodal(true);
    } else {
      alert("Error sending email. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(`${name} : ${value}`);
  };

  const handleClick = (e) => {
    if (e.target.id == selectedService) {
      styling.transform == styles.initial.transform
        ? setStyling({ transform: "scaleY(1)" })
        : setStyling({ transform: "scaleY(0)" });
    } else if (e.target.id) {
      setSelectedService(services[e.target.id]);
      setSelectedServiceID(e.target.id);
      setStyling({ transform: "scaleY(0)" });
    }
  };

  const addServicesList = () => {
    return Object.keys(services).map((service) => (
      <div
        key={service}
        id={service}
        className={
          selectedService == services[service]
            ? styleSheet.container_active
            : ""
        }
        onClick={(e) => handleClick(e)}
      >
        {services[service]}
      </div>
    ));
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "Budget":
        return (
          <>
            <div className={styleSheet.container_wrapper_additional_individual}>
              <div>{t("budget")}</div>
            </div>
          </>
        );
      case "lMovers":
        return <>{additionalInfo}</>;
      case "ldMovers":
        return <>{additionalInfo}</>;
      case "oMovers":
        return <>{additionalInfo}</>;
      case "lPlatform":
        return (
          <>
            <div className={styleSheet.container_wrapper_additional_individual}>
              <div>{t("lPlatform")}</div>
            </div>
          </>
        );
      case "Packing":
        return (
          <>
            <div className={styleSheet.container_wrapper_additional_individual}>
              <div>{t("Packing")}</div>
            </div>
          </>
        );
      case "Storage":
        return (
          <>
            <div className={styleSheet.container_wrapper_additional_individual}>
              <div>{t("Storage")}</div>
              <label>
                <input
                  name="includePackaging"
                  type="checkbox"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      includePackaging: e.target.checked,
                    })
                  }
                />
                {t("includeP")}
              </label>
            </div>
          </>
        );
      case "Cleaning":
        return (
          <>
            <div className={styleSheet.container_wrapper_additional_individual}>
              <div>{t("Cleaning")}</div>
            </div>
          </>
        );
      case "Recycling":
        return (
          <>
            <div className={styleSheet.container_wrapper_additional_individual}>
              <div>{t("Recycling")}</div>
            </div>
          </>
        );
      default:
        return <></>;
    }
  };

  const additionalInfo = (
    <div className={styleSheet.container_wrapper_additional}>
      <h1>{t("location")}</h1>
      <div className={styleSheet.container_wrapper}>
        <div>
          <label>{t("from")}:</label>
          <input
            required={true}
            name="postcodeFrom"
            placeholder={t("postcode")}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>{t("to")}:</label>
          <input
            required={true}
            name="postcodeTo"
            placeholder={t("postcode")}
            onChange={handleChange}
          />
        </div>
      </div>
      <label>
        <input
          name="includePackaging"
          type="checkbox"
          onChange={(e) =>
            setFormData({ ...formData, includePackaging: e.target.checked })
          }
        />
        {t("includeP")}
      </label>
    </div>
  );

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowmodal} />
      <div className={styleSheet.container}>
        <form onSubmit={handleSubmit}>
          {pageStyle === "Contacts" ? (
            <>
              <h1 style={{ textAlign: "start" }}>
                {pageVariants.header.componentStyle}
              </h1>
              <p>{t("p")}</p>
            </>
          ) : pageStyle === "Main" ? (
            <>
              {" "}
              <h1>{pageVariants.header.mainStyle}</h1>
            </>
          ) : (
            <h1>{pageVariants.header.defaultStyle}</h1>
          )}
          <div>
            {pageStyle === "Contacts" ? (
              <></>
            ) : pageStyle === "Main" ? (
              <></>
            ) : (
              <>
                <div>
                  <div
                    id={Contactformstyles[`${selectedServiceID}`]}
                    className={styleSheet.container_image}
                  ></div>
                </div>

                <div className={styleSheet.container_services}>
                  <div className={styleSheet.container_services_wrapper}>
                    <label>{t("service")}</label>

                    <div
                      onClick={(e) => handleClick(e)}
                      id={selectedService}
                      className={styleSheet.container_services_wrapper_initial}
                    >
                      {selectedService}
                      <RiArrowDropDownLine />
                      <div
                        className={styleSheet.container_services_wrapper_hidden}
                        style={styling}
                      >
                        {addServicesList()}
                      </div>
                    </div>
                    <>{renderSwitch(selectedServiceID)}</>
                  </div>
                </div>
              </>
            )}

            <div>
              <div className={styleSheet.container_wrapper}>
                <label className={styleSheet.container_required_field}>
                  {t("fName")}
                </label>
                <input
                  required={true}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className={styleSheet.container_wrapper}>
                <label className={styleSheet.container_required_field}>
                  {t("lName")}
                </label>
                <input
                  required={true}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className={styleSheet.container_wrapper}>
                <label className={styleSheet.container_required_field}>
                  {t("eMail")}
                </label>
                <input
                  required={true}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styleSheet.container_wrapper}>
                <label className={styleSheet.container_required_field}>
                  {t("phone")}
                </label>
                <PhoneInput
                  required={true}
                  country={"es"}
                  value={formData.phone}
                  onChange={(phone) => {
                    setFormData({ ...formData, phone });
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styleSheet.container_wrapper_textarea}>
            <label
              className={
                selectedService == "Lifting Platform"
                  ? styleSheet.container_required_field
                  : ""
              }
            >
              {t("message")}
            </label>
            <textarea
              required={true}
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className={styleSheet.container_buttonWrapper}>
            <label
              className={styleSheet.container_required_field}
              style={{ cursor: "pointer" }}
            >
              <input
                style={{ cursor: "pointer" }}
                required={true}
                type="checkbox"
                onChange={(e) =>
                  setFormData({ ...formData, termsChecked: e.target.checked })
                }
              />
              <a style={{ cursor: "default" }}>{t("agree")}</a>
              <Link
                href="/terms_conditions"
                target="_blank"
                style={{ color: "#00308F", cursor: "pointer" }}
              >
                {t("TC")}
              </Link>
            </label>
            <div className={styleSheet.button_wrapper}>
              <button
                className={`${Buttonstyles.button} ${styleSheet.button}`}
                type="submit"
              >
                {t("button")}
              </button>
            </div>
          </div>
        </form>

        {pageStyle === "Contacts" ? <ContactInfo /> : <></>}
      </div>
    </>
  );
};

export default Contactform;
