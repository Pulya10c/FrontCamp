class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindDataSourcesReceived(this.handleErrorReceived, this.handleOnDataSourcesReceived);
    this.model.bindDataArticlesReceived(this.handleErrorReceived, this.handleOnDataArticlesReceived);

    this.view.bindGetMoreArticlesIntersectedObserver(this.handleGetMoreArticlesIntersectedObserver);
    this.view.bindGetMoreArticlesButtonClick(this.handleGetMoreArticlesClick);
    this.view.bindInputQueryTextChanged(this.handleQueryTextChanged);
    this.view.bindCheckboxChanged(this.handleLanguageChanged);
    this.view.bindSelectQuerySourceChanged(this.handleSourceChanged);
    this.view.bindSearchArticlesClick(this.handleSearchArticlesClick);

    // initial renderSources
    this.model.getArticlesSources();
  }

  handleErrorReceived = () => {
    const {
      error: { message },
    } = this.model;

    this.view.renderErrorPopup(message);
  };

  handleOnDataSourcesReceived = () => {
    const {
      data: { sources },
    } = this.model;

    this.view.renderSources(sources);
  };

  handleOnDataArticlesReceived = () => {
    const {
      data: { articles, totalResults },
      queryParams: { page, articlesPerPage },
    } = this.model;

    this.view.render({
      articles,
      totalResults,
      page,
      articlesPerPage,
    });
  };

  handleSourceChanged = sourceId => {
    this.model.updateSelectedSource(sourceId);

    const {
      queryParams: { selectedSource, inputQueryText },
    } = this.model;

    this.view.updateDisabledSearchButton({ inputQueryText, selectedSource });
  };

  handleQueryTextChanged = text => {
    this.model.updateQueryText(text);

    const {
      queryParams: { selectedSource, inputQueryText },
    } = this.model;

    this.view.updateDisabledSearchButton({ inputQueryText, selectedSource });
  };

  handleLanguageChanged = checked => {
    this.model.updateLanguage(checked);
  };

  handleGetMoreArticlesClick = () => {
    this.model.getMoreArticles();
  };

  handleGetMoreArticlesIntersectedObserver = () => {
    this.model.getMoreArticles();
  };

  handleSearchArticlesClick = () => {
    this.model.searchArticles();
  };
}

export default Controller;
