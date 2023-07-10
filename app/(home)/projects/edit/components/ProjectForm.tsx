"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Author, Feature, Project } from "~/firebase/models";
import { v4 as uuidv4 } from "uuid";
import { ImagesStorage, projectImages } from "~/firebase/storage";
import { ProjectCollection } from "~/firebase/database";
import { useRouter } from "next/navigation";
import clsx from "clsx";

type Props = {
  id: string;
  data: Project;
};

const icons = [
  "ti-wand",
  "ti-volume",
  "ti-user",
  "ti-unlock",
  "ti-unlink",
  "ti-trash",
  "ti-thought",
  "ti-target",
  "ti-tag",
  "ti-tablet",
  "ti-star",
  "ti-spray",
  "ti-signal",
  "ti-shopping-cart",
  "ti-shopping-cart-full",
  "ti-settings",
  "ti-search",
  "ti-zoom-in",
  "ti-zoom-out",
  "ti-cut",
  "ti-ruler",
  "ti-ruler-pencil",
  "ti-ruler-alt",
  "ti-bookmark",
  "ti-bookmark-alt",
  "ti-reload",
  "ti-plus",
  "ti-pin",
  "ti-pencil",
  "ti-pencil-alt",
  "ti-paint-roller",
  "ti-paint-bucket",
  "ti-na",
  "ti-mobile",
  "ti-minus",
  "ti-medall",
  "ti-medall-alt",
  "ti-marker",
  "ti-marker-alt",
  "ti-arrow-up",
  "ti-arrow-right",
  "ti-arrow-left",
  "ti-arrow-down",
  "ti-lock",
  "ti-location-arrow",
  "ti-link",
  "ti-layout",
  "ti-layers",
  "ti-layers-alt",
  "ti-key",
  "ti-import",
  "ti-image",
  "ti-heart",
  "ti-heart-broken",
  "ti-hand-stop",
  "ti-hand-open",
  "ti-hand-drag",
  "ti-folder",
  "ti-flag",
  "ti-flag-alt",
  "ti-flag-alt-2",
  "ti-eye",
  "ti-export",
  "ti-exchange-vertical",
  "ti-desktop",
  "ti-cup",
  "ti-crown",
  "ti-comments",
  "ti-comment",
  "ti-comment-alt",
  "ti-close",
  "ti-clip",
  "ti-angle-up",
  "ti-angle-right",
  "ti-angle-left",
  "ti-angle-down",
  "ti-check",
  "ti-check-box",
  "ti-camera",
  "ti-announcement",
  "ti-brush",
  "ti-briefcase",
  "ti-bolt",
  "ti-bolt-alt",
  "ti-blackboard",
  "ti-bag",
  "ti-move",
  "ti-arrows-vertical",
  "ti-arrows-horizontal",
  "ti-fullscreen",
  "ti-arrow-top-right",
  "ti-arrow-top-left",
  "ti-arrow-circle-up",
  "ti-arrow-circle-right",
  "ti-arrow-circle-left",
  "ti-arrow-circle-down",
  "ti-angle-double-up",
  "ti-angle-double-right",
  "ti-angle-double-left",
  "ti-angle-double-down",
  "ti-zip",
  "ti-world",
  "ti-wheelchair",
  "ti-view-list",
  "ti-view-list-alt",
  "ti-view-grid",
  "ti-uppercase",
  "ti-upload",
  "ti-underline",
  "ti-truck",
  "ti-timer",
  "ti-ticket",
  "ti-thumb-up",
  "ti-thumb-down",
  "ti-text",
  "ti-stats-up",
  "ti-stats-down",
  "ti-split-v",
  "ti-split-h",
  "ti-smallcap",
  "ti-shine",
  "ti-shift-right",
  "ti-shift-left",
  "ti-shield",
  "ti-notepad",
  "ti-server",
  "ti-quote-right",
  "ti-quote-left",
  "ti-pulse",
  "ti-printer",
  "ti-power-off",
  "ti-plug",
  "ti-pie-chart",
  "ti-paragraph",
  "ti-panel",
  "ti-package",
  "ti-music",
  "ti-music-alt",
  "ti-mouse",
  "ti-mouse-alt",
  "ti-money",
  "ti-microphone",
  "ti-menu",
  "ti-menu-alt",
  "ti-map",
  "ti-map-alt",
  "ti-loop",
  "ti-location-pin",
  "ti-list",
  "ti-light-bulb",
  "ti-Italic",
  "ti-info",
  "ti-infinite",
  "ti-id-badge",
  "ti-hummer",
  "ti-home",
  "ti-help",
  "ti-headphone",
  "ti-harddrives",
  "ti-harddrive",
  "ti-gift",
  "ti-game",
  "ti-filter",
  "ti-files",
  "ti-file",
  "ti-eraser",
  "ti-envelope",
  "ti-download",
  "ti-direction",
  "ti-direction-alt",
  "ti-dashboard",
  "ti-control-stop",
  "ti-control-shuffle",
  "ti-control-play",
  "ti-control-pause",
  "ti-control-forward",
  "ti-control-backward",
  "ti-cloud",
  "ti-cloud-up",
  "ti-cloud-down",
  "ti-clipboard",
  "ti-car",
  "ti-calendar",
  "ti-book",
  "ti-bell",
  "ti-basketball",
  "ti-bar-chart",
  "ti-bar-chart-alt",
  "ti-back-right",
  "ti-back-left",
  "ti-arrows-corner",
  "ti-archive",
  "ti-anchor",
  "ti-align-right",
  "ti-align-left",
  "ti-align-justify",
  "ti-align-center",
  "ti-alert",
  "ti-alarm-clock",
  "ti-agenda",
  "ti-write",
  "ti-window",
  "ti-widgetized",
  "ti-widget",
  "ti-widget-alt",
  "ti-wallet",
  "ti-video-clapper",
  "ti-video-camera",
  "ti-vector",
  "ti-themify-logo",
  "ti-themify-favicon",
  "ti-themify-favicon-alt",
  "ti-support",
  "ti-stamp",
  "ti-split-v-alt",
  "ti-slice",
  "ti-shortcode",
  "ti-shift-right-alt",
  "ti-shift-left-alt",
  "ti-ruler-alt-2",
  "ti-receipt",
  "ti-pin2",
  "ti-pin-alt",
  "ti-pencil-alt2",
  "ti-palette",
  "ti-more",
  "ti-more-alt",
  "ti-microphone-alt",
  "ti-magnet",
  "ti-line-double",
  "ti-line-dotted",
  "ti-line-dashed",
  "ti-layout-width-full",
  "ti-layout-width-default",
  "ti-layout-width-default-alt",
  "ti-layout-tab",
  "ti-layout-tab-window",
  "ti-layout-tab-v",
  "ti-layout-tab-min",
  "ti-layout-slider",
  "ti-layout-slider-alt",
  "ti-layout-sidebar-right",
  "ti-layout-sidebar-none",
  "ti-layout-sidebar-left",
  "ti-layout-placeholder",
  "ti-layout-menu",
  "ti-layout-menu-v",
  "ti-layout-menu-separated",
  "ti-layout-menu-full",
  "ti-layout-media-right-alt",
  "ti-layout-media-right",
  "ti-layout-media-overlay",
  "ti-layout-media-overlay-alt",
  "ti-layout-media-overlay-alt-2",
  "ti-layout-media-left-alt",
  "ti-layout-media-left",
  "ti-layout-media-center-alt",
  "ti-layout-media-center",
  "ti-layout-list-thumb",
  "ti-layout-list-thumb-alt",
  "ti-layout-list-post",
  "ti-layout-list-large-image",
  "ti-layout-line-solid",
  "ti-layout-grid4",
  "ti-layout-grid3",
  "ti-layout-grid2",
  "ti-layout-grid2-thumb",
  "ti-layout-cta-right",
  "ti-layout-cta-left",
  "ti-layout-cta-center",
  "ti-layout-cta-btn-right",
  "ti-layout-cta-btn-left",
  "ti-layout-column4",
  "ti-layout-column3",
  "ti-layout-column2",
  "ti-layout-accordion-separated",
  "ti-layout-accordion-merged",
  "ti-layout-accordion-list",
  "ti-ink-pen",
  "ti-info-alt",
  "ti-help-alt",
  "ti-headphone-alt",
  "ti-hand-point-up",
  "ti-hand-point-right",
  "ti-hand-point-left",
  "ti-hand-point-down",
  "ti-gallery",
  "ti-face-smile",
  "ti-face-sad",
  "ti-credit-card",
  "ti-control-skip-forward",
  "ti-control-skip-backward",
  "ti-control-record",
  "ti-control-eject",
  "ti-comments-smiley",
  "ti-brush-alt",
  "ti-youtube",
  "ti-vimeo",
  "ti-twitter",
  "ti-time",
  "ti-tumblr",
  "ti-skype",
  "ti-share",
  "ti-share-alt",
  "ti-rocket",
  "ti-pinterest",
  "ti-new-window",
  "ti-microsoft",
  "ti-list-ol",
  "ti-linkedin",
  "ti-layout-sidebar-2",
  "ti-layout-grid4-alt",
  "ti-layout-grid3-alt",
  "ti-layout-grid2-alt",
  "ti-layout-column4-alt",
  "ti-layout-column3-alt",
  "ti-layout-column2-alt",
  "ti-instagram",
  "ti-google",
  "ti-github",
  "ti-flickr",
  "ti-facebook",
  "ti-dropbox",
  "ti-dribbble",
  "ti-apple",
  "ti-android",
  "ti-save",
  "ti-save-alt",
  "ti-yahoo",
  "ti-wordpress",
  "ti-vimeo-alt",
  "ti-twitter-alt",
  "ti-tumblr-alt",
  "ti-trello",
  "ti-stack-overflow",
  "ti-soundcloud",
  "ti-sharethis",
  "ti-sharethis-alt",
  "ti-reddit",
  "ti-pinterest-alt",
  "ti-microsoft-alt",
  "ti-linux",
  "ti-jsfiddle",
  "ti-joomla",
  "ti-html5",
  "ti-flickr-alt",
  "ti-email",
  "ti-drupal",
  "ti-dropbox-alt",
  "ti-css3",
  "ti-rss",
  "ti-rss-alt",
];

type ProjectFormProps = Omit<
  Project,
  "feature" | "authors" | "previewUrl" | "coverUrl" | "id"
>;

const previewImages = {
  ComplexAppSection: "/images/feature/iphone-ipad.jpg",
  SimpleAppSection: "/images/feature/feature-new-01.jpg",
  SingleAppSection: "/images/feature/feature-new-02.jpg",
};

const ProjectForm: FC<Props> = ({ id, data }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    data.coverUrl ?? "/images/background/promo-video-back.jpg"
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProjectFormProps>({ defaultValues: data });
  const [authors, setAuthors] = useState<Author[]>(data.authors || []);
  const [features, setFeatures] = useState<Feature[]>(data.features || []);
  const navigate = useRouter();

  const sectionType = watch("sectionType");

  const onSubmit: SubmitHandler<ProjectFormProps> = async (values) => {
    setLoading(true);

    const previewUrl = await ImagesStorage.uploadProjectData(
      id,
      previewImages[values.sectionType],
      projectImages.preview
    );

    const coverUrl = await ImagesStorage.uploadProjectData(
      id,
      imageUrl,
      projectImages.cover
    );

    for (const author of authors)
      author.avatarUrl = await ImagesStorage.uploadProjectAuthor(
        id,
        author.avatarUrl,
        author.id
      );

    const projectInfo: Project = {
      id,
      ...values,
      authors,
      features,
      previewUrl,
      coverUrl,
    };

    const result = await new ProjectCollection().createWithId({
      ...projectInfo,
    });
    setLoading(false);
    if (result) navigate.push(`/projects/${id}`);
  };

  const onChangeCoverImage = (event: any) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrlTemp = URL.createObjectURL(file);
    setImageUrl(imageUrlTemp);
  };

  const addNewAuthor = () => {
    if (authors.some((x) => !x.name)) return;
    setAuthors([
      ...authors,
      {
        id: uuidv4(),
        name: "",
        biography: "",
        avatarUrl: "/images/team/design-team-02.jpg",
      },
    ]);
  };

  const addNewFeature = () => {
    if (features.some((x) => !x.title)) return;
    setFeatures([
      ...features,
      {
        id: uuidv4(),
        title: "",
        description: "",
        icon: "",
      },
    ]);
  };

  const deleteAuthor = (id: string) => {
    setAuthors(authors.filter((x) => x.id !== id));
  };

  const deleteFeature = (id: string) => {
    setFeatures(features.filter((x) => x.id !== id));
  };

  const onChangeAuthorImage = (file: Blob, id: string) => {
    if (!file) return;

    setAuthors(
      authors.map((author) =>
        author.id === id
          ? { ...author, avatarUrl: URL.createObjectURL(file) }
          : author
      )
    );
  };

  return (
    <>
      <div className="image align-self-center mb-5">
        <Image
          className="card rounded table-hover"
          src={imageUrl}
          alt="desk-image"
          style={{ objectFit: "cover", cursor: "pointer" }}
          onClick={() => document.getElementById("coverFile")?.click()}
          width={700}
          height={349}
        />
      </div>
      <div className="content">
        <div className="title-text text-center">
          <h3>Editar Proyecto: {id}</h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column"
          style={{ gap: ".5rem" }}
        >
          <div>
            {errors.title && (
              <span className="text-danger">Campo requerido</span>
            )}
            <input
              className="form-control main"
              placeholder="Título del projecto"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            {errors.description && (
              <span className="text-danger">Campo requerido</span>
            )}
            <input
              className="form-control main"
              placeholder="Descripción del projecto"
              {...register("description", { required: true })}
            />
          </div>
          <div>
            {errors.sectionType && (
              <span className="text-danger">Campo requerido</span>
            )}
            <select
              className="form-control main"
              placeholder="Presentación"
              {...register("sectionType", { required: true })}
            >
              <option value="SingleAppSection">Dispositivo móvil</option>
              <option value="SimpleAppSection">Dos móviles</option>
              <option value="ComplexAppSection">Dispositivo móvil y web</option>
            </select>
          </div>
          <div>
            {errors.content && (
              <span className="text-danger">Campo requerido</span>
            )}
            <textarea
              className="form-control"
              rows={10}
              placeholder="Detalle del proyecto (Markdown)"
              {...register("content", { required: true })}
            />
          </div>
          <input
            type="file"
            hidden
            id="coverFile"
            onChange={(e) => onChangeCoverImage(e)}
          />
          <div>
            <div className="dropdown-divider m-3" />
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => addNewAuthor()}
              >
                Agregar autor
              </button>
            </div>
          </div>
          <div>
            {authors.map(({ biography, name, avatarUrl, id }) => (
              <div
                key={`author-${id}`}
                className="d-flex"
                style={{ gap: "1rem" }}
              >
                <input
                  type="file"
                  hidden
                  id={`author-${id}`}
                  onChange={(e) =>
                    // @ts-ignore
                    onChangeAuthorImage(e.target.files[0] as File, id)
                  }
                />
                <Image
                  src={avatarUrl}
                  width="40"
                  height="40"
                  className="rounded-circle"
                  alt="avatar"
                  onClick={() =>
                    document.getElementById(`author-${id}`)?.click()
                  }
                />
                <input
                  value={name}
                  className="form-control main col-4"
                  placeholder="Nombre"
                  onChange={({ target }) =>
                    setAuthors(
                      authors.map((author) =>
                        author.id !== id
                          ? author
                          : { ...author, name: target.value }
                      )
                    )
                  }
                />
                <input
                  value={biography}
                  className="form-control main col"
                  placeholder="Biografía"
                  onChange={({ target }) =>
                    setAuthors(
                      authors.map((author) =>
                        author.id !== id
                          ? author
                          : { ...author, biography: target.value }
                      )
                    )
                  }
                />
                <div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteAuthor(id)}
                  >
                    <i className="ti-eraser"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {sectionType === "ComplexAppSection" && (
            <>
              <div>
                <div className="dropdown-divider m-3" />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => addNewFeature()}
                  >
                    Agregar característica
                  </button>
                </div>
              </div>
              <div className="mb-5">
                {features.map(({ id, description, icon, title }) => (
                  <div
                    key={`author-${id}`}
                    className="d-flex"
                    style={{ gap: "1rem" }}
                  >
                    <select
                      value={icon}
                      className="form-control main col-3"
                      placeholder="Icono"
                      onChange={({ target }) =>
                        setFeatures(
                          features.map((features) =>
                            features.id !== id
                              ? features
                              : { ...features, icon: target.value }
                          )
                        )
                      }
                    >
                      {icons.map((icon) => (
                        <option key={icon} value={icon}>
                          {icon}
                        </option>
                      ))}
                    </select>
                    <input
                      value={title}
                      className="form-control main col-3"
                      placeholder="Titulo"
                      onChange={({ target }) =>
                        setFeatures(
                          features.map((features) =>
                            features.id !== id
                              ? features
                              : { ...features, title: target.value }
                          )
                        )
                      }
                    />
                    <input
                      value={description}
                      className="form-control main col"
                      placeholder="Descripción"
                      onChange={({ target }) =>
                        setFeatures(
                          features.map((feature) =>
                            feature.id !== id
                              ? feature
                              : { ...feature, description: target.value }
                          )
                        )
                      }
                    />
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteFeature(id)}
                      >
                        <i className="ti-eraser"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          <input
            type="submit"
            className={clsx("btn btn-primary", loading ? "disabled" : "")}
            value={loading ? "Cargando..." : "Guardar"}
          />
        </form>
      </div>
    </>
  );
};
export default ProjectForm;
