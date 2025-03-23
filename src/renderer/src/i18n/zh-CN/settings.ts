export default {
  title: '设置',
  common: {
    title: '通用设置',
    resetData: '重置数据',
    language: '语言',
    languageSelect: '选择语言',
    searchEngine: '搜索引擎',
    searchEngineSelect: '选择搜索引擎',
    searchPreview: '搜索预览',
    searchAssistantModel: '搜索助手模型',
    selectModel: '选择模型',
    proxyMode: '代理模式',
    proxyModeSelect: '选择代理模式',
    proxyModeSystem: '系统代理',
    proxyModeNone: '不使用代理',
    proxyModeCustom: '自定义代理',
    customProxyUrl: '自定义代理地址',
    customProxyUrlPlaceholder: '例如: http://127.0.0.1:7890',
    invalidProxyUrl: '无效的代理地址，请输入有效的 http/https URL',
    addCustomSearchEngine: '添加自定义搜索引擎',
    addCustomSearchEngineDesc:
      '添加一个新的搜索引擎，需要提供名称和搜索URL。URL中必须包含{query}作为查询占位符。',
    searchEngineName: '搜索引擎名称',
    searchEngineNamePlaceholder: '请输入搜索引擎名称',
    searchEngineUrl: '搜索URL',
    searchEngineUrlPlaceholder: "如: https://a.com/search?q={'{'}query{'}'}",
    searchEngineUrlError: "URL必须包含{'{'}query{'}'}作为查询占位符",
    deleteCustomSearchEngine: '删除自定义搜索引擎',
    deleteCustomSearchEngineDesc: '确定要删除自定义搜索引擎 "{name}" 吗？此操作无法撤销。',
    testSearchEngine: '测试搜索引擎',
    testSearchEngineDesc: '即将使用 {engine} 搜索引擎进行测试搜索，将搜索关键词 "天气"。',
    testSearchEngineNote:
      '如果搜索页面需要登录或其他操作，您可以在测试窗口中进行。完成测试后请关闭测试窗口。',
    theme: '主题',
    themeSelect: '选择主题',
    closeToQuit: '点击关闭按钮时退出程序',
    contentProtection: '投屏保护',
    contentProtectionDialogTitle: '投屏保护切换确认',
    contentProtectionEnableDesc:
      '开启投屏保护可以防止投屏软件捕获DeepChat主窗口，用来保护您的内容隐私。请注意，此功能不会彻底隐藏所有界面，请合理合规使用。并且，并不是所有投屏软件都遵守用户隐私设定，该功能可能会在一些不遵守隐私设定的投屏软件上失效，切部分环境中可能会残留一个黑色窗体。',
    contentProtectionDisableDesc: '关闭投屏保护将允许投屏软件捕获DeepChat窗口。',
    contentProtectionRestartNotice: '切换此设置将导致程序重启，请确认是否继续？'
  },
  data: {
    title: '数据设置',
    syncEnable: '启用数据同步',
    syncFolder: '同步文件夹',
    openSyncFolder: '打开同步文件夹',
    lastSyncTime: '上次同步时间',
    never: '从未同步',
    startBackup: '立即备份',
    backingUp: '备份中...',
    importData: '导入数据',
    incrementImport: '增量导入',
    overwriteImport: '覆盖导入',
    importConfirmTitle: '确认导入数据',
    importConfirmDescription:
      '导入将会覆盖当前所有数据，包括聊天记录和设置。请确保已备份重要数据。导入完成后需要重启应用程序。',
    importing: '导入中...',
    confirmImport: '确认导入',
    importSuccessTitle: '导入成功',
    importErrorTitle: '导入失败'
  },
  model: {
    title: '模型设置',
    systemPrompt: {
      label: '系统提示词',
      placeholder: '请输入系统提示词...',
      description: '设置AI助手的系统提示词，用于定义其行为和角色'
    },
    temperature: {
      label: '模型温度',
      description: '控制输出的随机性，较高的值会产生更具创造性的响应'
    },
    contextLength: {
      label: '上下文长度',
      description: '设置对话上下文的最大长度'
    },
    responseLength: {
      label: '返回文本长度',
      description: '设置AI响应的最大长度'
    },
    artifacts: {
      title: 'Artifacts效果',
      description: '代码块生成动画效果'
    },
    provider: '服务商',
    modelList: '模型列表',
    selectModel: '选择模型',
    providerSetting: '服务商设置',
    configureModel: '配置模型',
    addModel: '添加模型'
  },
  provider: {
    enable: '开启服务',
    urlPlaceholder: '请输入API URL',
    keyPlaceholder: '请输入API Key',
    verifyKey: '验证密钥',
    howToGet: '如何获取',
    getKeyTip: '请前往',
    getKeyTipEnd: '获取API Key',
    urlFormat: 'API样例：{defaultUrl}',
    modelList: '模型列表',
    enableModels: '启用模型',
    disableAllModels: '禁用全部',
    modelsEnabled: '模型已经启用',
    verifyLink: '验证链接',
    syncModelsFailed: '同步模型失败...',
    addCustomProvider: '添加自定义服务商',
    delete: '删除',
    stopModel: '停止模型',
    pulling: '拉取中...',
    runModel: '运行模型',
    dialog: {
      disableModel: {
        title: '确认禁用模型',
        content: '是否确认禁用模型 "{name}"？',
        confirm: '禁用'
      },
      disableAllModels: {
        title: '确认禁用全部模型',
        content: '是否确认禁用 "{name}" 的全部模型？',
        confirm: '全部禁用'
      },
      configModels: {
        title: '配置模型列表'
      },
      verify: {
        missingFields: '请输入 API Key 和 API URL',
        failed: '验证失败',
        success: '验证成功'
      },
      addCustomProvider: {
        title: '添加自定义服务商',
        description: '请填写服务商的必要信息',
        name: '名称',
        namePlaceholder: '请输入服务商名称',
        apiType: 'API类型',
        apiTypePlaceholder: '请选择API类型',
        apiKey: 'API密钥',
        apiKeyPlaceholder: '请输入API密钥',
        baseUrl: 'API地址',
        baseUrlPlaceholder: '请输入API基础地址',
        enable: '启用服务商'
      },
      deleteProvider: {
        title: '确认删除服务商',
        content: '是否确认删除服务商 "{name}"？此操作不可恢复。',
        confirm: '删除'
      },
      deleteModel: {
        title: '确认删除模型',
        content: '是否确认删除模型 "{name}"？此操作不可恢复。',
        confirm: '删除'
      },
      pullModel: {
        title: '拉取模型',
        pull: '拉取'
      }
    },
    pullModels: '拉取模型',
    refreshModels: '刷新模型',
    modelsRunning: '运行中的模型',
    runningModels: '运行中的模型',
    noRunningModels: '没有运行中的模型',
    deleteModel: '删除模型',
    deleteModelConfirm: '是否确认删除模型 "{name}"？此操作不可恢复。',
    noLocalModels: '没有本地模型',
    localModels: '本地模型'
  },
  mcp: {
    title: 'MCP设置',
    description: '管理和配置MCP（Model Control Protocol）服务器和工具',
    enabledTitle: '启用MCP',
    enabledDescription: '启用或禁用MCP功能和工具',
    enableToAccess: '请先启用MCP以访问配置选项',
    tabs: {
      servers: '服务器',
      tools: '工具'
    },
    serverList: '服务器列表',
    addServer: '添加服务器',
    running: '运行中',
    stopped: '已停止',
    stopServer: '停止服务器',
    startServer: '启动服务器',
    noServersFound: '未找到服务器',
    addServerDialog: {
      title: '添加服务器',
      description: '配置新的MCP服务器'
    },
    editServerDialog: {
      title: '编辑服务器',
      description: '编辑MCP服务器配置'
    },
    serverForm: {
      name: '服务器名称',
      namePlaceholder: '输入服务器名称',
      nameRequired: '服务器名称不能为空',
      type: '服务器类型',
      typePlaceholder: '选择服务器类型',
      typeStdio: '标准输入输出',
      typeSse: '服务器发送事件',
      baseUrl: '基础URL',
      baseUrlPlaceholder: '输入服务器基础URL（如：http://localhost:3000）',
      command: '命令',
      commandPlaceholder: '输入命令',
      commandRequired: '命令不能为空',
      args: '参数',
      argsPlaceholder: '输入参数，用空格分隔',
      argsRequired: '参数不能为空',
      env: '环境变量',
      envPlaceholder: '输入JSON格式的环境变量',
      envInvalid: '环境变量必须是有效的JSON格式',
      description: '描述',
      descriptionPlaceholder: '输入服务器描述',
      descriptions: '描述',
      descriptionsPlaceholder: '输入服务器描述',
      icon: '图标',
      iconPlaceholder: '输入图标',
      icons: '图标',
      iconsPlaceholder: '输入图标',
      autoApprove: '自动授权',
      autoApproveAll: '全部',
      autoApproveRead: '读取',
      autoApproveWrite: '写入',
      autoApproveHelp: '选择需要自动授权的操作类型，无需用户确认即可执行',
      submit: '提交',
      add: '添加',
      update: '更新',
      cancel: '取消',
      jsonConfigIntro: '您可以直接粘贴JSON配置或选择手动配置服务器。',
      jsonConfig: 'JSON配置',
      jsonConfigPlaceholder: '请粘贴MCP服务器的JSON格式配置',
      jsonConfigExample: 'JSON配置示例',
      parseSuccess: '配置解析成功',
      configImported: '配置导入成功',
      parseError: '解析错误',
      skipToManual: '跳过至手动配置',
      parseAndContinue: '解析并继续'
    },
    deleteServer: '删除服务器',
    editServer: '编辑服务器',
    setDefault: '设为默认',
    isDefault: '默认服务器',
    default: '默认',
    setAsDefault: '设为默认服务器',
    removeServer: '删除服务器',
    confirmRemoveServer: '确定要删除服务器 {name} 吗？此操作无法撤销。',
    removeServerDialog: {
      title: '删除服务器'
    },
    confirmDelete: {
      title: '确认删除',
      description: '确定要删除服务器 {name} 吗？此操作无法撤销。',
      confirm: '删除',
      cancel: '取消'
    },
    resetToDefault: '恢复默认服务',
    resetConfirmTitle: '恢复默认服务',
    resetConfirmDescription:
      '此操作将恢复所有默认服务器，同时保留您自定义的服务器。对默认服务器的任何修改将会丢失。',
    resetConfirm: '恢复'
  },
  about: {
    title: '关于我们',
    version: '版本',
    checkUpdate: '检查更新',
    checking: '检查中...',
    latestVersion: '已是最新版本'
  }
}
