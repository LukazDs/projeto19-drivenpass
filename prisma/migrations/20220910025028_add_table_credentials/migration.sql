-- CreateTable
CREATE TABLE "Credentials" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "credentialName" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_title_key" ON "Credentials"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_credentialName_key" ON "Credentials"("credentialName");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_label_key" ON "Credentials"("label");
